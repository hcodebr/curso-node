const fs = require('fs')

fs.readdir(__dirname, (err, data)=>{
    if(err) throw err;

    data.forEach((files)=>{
        console.log(__dirname +'\\'+ files);
    })
})