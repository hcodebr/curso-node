const fs = require('fs').promises

async function verificaDir (dirpath) {
  try {
    await fs.mkdir(dirpath, { recursive: true })
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

async function main () {
  try {
    await verificaDir('a/b/c')
    console.log('Directory ')
  } catch (err) {
    console.error(err)
  }
}

main()