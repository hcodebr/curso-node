//throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!')


//tente executar alguma coisa, se der erro execute o catch automaticamente

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!')
}

function init(){
    try {
        execute()   
    } catch (e) {
        console.log(`Temos um problema! ${e}`)
    }
}
    
init()
console.log('Depois do Erro')