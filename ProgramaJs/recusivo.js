/**
 
 * Uma estrutura recursiva é uma estrutura que que vai tratar de 2 mecanismos o primeiro sendo a base da etrutura e outra sendo um recurso da estutura.

Ela tem como mecanismo de chamada própria para ela mesma sendo em alguns caso bastantes utilizadas em uma estruturação de código.
 
 */


function recusivo(i) {
    console.log(`Valor de i : ${i}`)
    if (i <= 1) {
        return
    } else {
        recusivo(i - 1);
    }
};

let valor = 0;

recusivo(valor);

for (let i = 5; i > 0; i--) {
    console.log(i);
};

while (valor > 0) {
    console.log(valor)
    valor--
};

do {
    console.log(valor)
    valor--
} while (valor > 0);

