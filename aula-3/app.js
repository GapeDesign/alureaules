// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// // enquanto o chute não for igual ao n.s.
// while(chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');
//     // se chute for igual ao número secreto
//     if(chute === numeroSecreto) {
//         alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//     } else {
//         if(chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`)
//         } else {
//             alert(`O número secreto é maior que ${chute}`)
//         }
//     }
//     tentativas++;
// }

// exercicio 1
// let contador = 1;

// while(contador < 11) {
//     console.log(contador);
//     contador++;
// }

// exercicio 2
// let contador = 10;

// while(contador != -1) {
//     console.log(contador);
//     contador--;
// }

// exercicio 3
// let numero = parseInt(prompt('Escolha um número:'));

// while(numero >= 0) {
//     console.log(numero);
//     numero--;
// }

// exercicio 4
let numero = parseInt(prompt('Escolha um número:'));
let contador = 0;

while(contador <= numero) {
    
    if(numero <= contador) {
        console.error('Digite um número válido!!');
        break;
    }

    console.log(contador);
    contador++;
}
