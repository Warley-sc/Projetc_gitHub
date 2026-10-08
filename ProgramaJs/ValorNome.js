const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual seu nome? ', (valor) =>{
    let x = valor;
    console.log(x);
    rl.close();
});