alert('Boas vindas ao jogo do número secreto!');

let numMax = 1000;
let numeroSecreto = parseInt(Math.random() * numMax + 1);
console.log(numeroSecreto);
let tentativas = 1;
let chute = prompt(`Escolha um número entre 1 e ${numMax}`);


while (chute != numeroSecreto){
    if(chute > numeroSecreto){
        alert('O seu chute foi maior que o número secreto!');
    }else{
        alert('Seu chute foi menor que o número secreto!');
    }
    chute = prompt(`Escolha um número entre 1 e ${numMax}`);
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou com ${tentativas} ${palavraTentativa}!`);