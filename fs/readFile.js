const fs = require('fs')
//não bloqueante
fs.readFile('texto.txt',(err, data)=>{
    if(err) throw err

   // console.log(data.toString())

})

//bloqueante
const texto = fs.readFileSync("texto.txt")

console.log(`Texto: ${texto}`)