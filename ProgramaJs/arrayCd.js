const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let aluno = [];

function alunoRegistro() {
    rl.question('Nome : ', (nome) => {
        rl.question('Nota : ', (nota) => {
            let registrar = {
                Nome: nome,
                Nota: nota
            };
            aluno.push(registrar);
            rl.question('Registrar mais aluno (s/n) : ', (valor) => {
                if (valor.toLocaleLowerCase() === 's') {
                    console.log('-----------------');
                    alunoRegistro();

                } else {
                    console.log('\n\n-----------Situação dos alunos-----------\n\n')
                    alunosSituacao()
                    console.log('-----------------');
                    rl.close();

                };
            });
        });
    });
};

function alunosSituacao() {
    aluno.sort((a, b) => {
        if (a.Nota > 6 && b.Nota <= 6) return -1;
        if (b.Nota <= 6 && a.Nota > 6) return 1;
        return b.Nota - a.Nota;
    });
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].Nota > 6) {
            
            console.log(`Aluno : ${aluno[i].Nome}\nNota : ${aluno[i].Nota}\nSituação : Aprovado.`);
            console.log('\n\n-----------------');

        } else {
            console.log(`Aluno : ${aluno[i].Nome}\nNota : ${aluno[i].Nota}\nSituação : Reprovado.`);
            console.log('\n\n-----------------');

        };
    };
};

alunoRegistro();