const fs = require('fs').promises

async function read() {

    const data = await fs.readFile('texto.txt', 'binary')
    return new Buffer.from(data)
}


try {
    read().then(data => console.log(data.toString()))
} catch (error) {
    console.log(err)
}
