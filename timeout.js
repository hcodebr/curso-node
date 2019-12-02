setTimeout(()=>{
    console.log("Executando a Função em 5 Segundos!");
    console.log("O que acontece no Event Loop? Ele espera os 5 segundos congelando o código subsequente? Ou ele executa o código subsequente e em seguida executa o Timeout?");

},5000);

console.log("Código Síncrono!");