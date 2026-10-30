/*
    Apenas 1 código que traz uma estrutura de repetição, e a utilização de um mecanismo de numeros aletorios, que inicialmente são de 0,0000000001 ate 0,9999999... assim por diante, mas como fazemos uma multiplicação e e utilizamos o macanismo de TOFIXED(0), podemos alterar os valores e arredonda-los
*/

for(let i = 0; i < 6; i++){
    let loterica = Math.random() * 61;
    console.log(`Numero ${i + 1} : ${loterica.toFixed(0)}`);
};