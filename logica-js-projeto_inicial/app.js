alert('Boas Vindas ao jogo do número secreto');

// let numeroSecreto = 29;
// let chute = prompt ('Escolha um número de 1 a 10');

// if (chute == numeroSecreto) {
//     console.log('Você Venceu!');
// }

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = "Erro! Preencha todos os campos";

nome = prompt('Qual o nome do usuário??');

idade = parseInt( prompt('Qual a idade do usuário??'));

if(idade >= 18) {
    alert('Pode tirar a habilitação!')
}
else {
    alert('Não pode tirar a habilitação!')
}