const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function troca (palavra, a, b){
    console.log(palavra.replace(a, b))
};

rl.question('Nome : ' , (valor) =>{
    let x = valor.charAt(0);
    troca(valor, x, "B");
    rl.close();
});