const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let media = 6;

function resultado (a, n){
    if (n >= media){
        console.log('----------------------');
        console.log(`Aluno : ${a}\nSituação : Aprovado\nNota: ${n}`);
        console.log('----------------------');

    }else{
        console.log('----------------------');
        console.log(`Aluno : ${a}\nSituação : Reprovado\nNota: ${n}`);
        console.log('----------------------')

    };
};

rl.question('Nome : ', (Nome) =>{
    rl.question('Nota : ', (Nota) =>{
        let x = Number(Nota);
        resultado(Nome, x);
        rl.close();
    });
});