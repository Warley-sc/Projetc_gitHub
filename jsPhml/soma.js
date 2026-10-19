let n1 = document.getElementById('in');
let n2 = document.getElementById('in2');
let btn = document.getElementById('btn');
let res = document.getElementById('resposta');


function adicionar() {
    let x = Number(n1.value); 
    let y = Number(n2.value); 
    let somar = x + y;
    res.innerHTML = `A soma deu : ${somar}`;
}

btn.addEventListener('click', adicionar);