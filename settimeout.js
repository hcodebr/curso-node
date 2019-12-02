setTimeout(()=>{
    console.log("Executando Callback, dentro do setTimeout!");
},3000);

setImmediate(()=>{
    console.log("Executando o setImmediate!");
});