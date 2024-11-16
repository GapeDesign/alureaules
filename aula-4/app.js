alert('Boas vindas ao jogo do número secreto');

const numeroMaximo = 10;
const numeroAleatorio = Math.random();
const entreZeroEnumeroMaximo = numeroAleatorio * numeroMaximo;


let numeroSecreto = parseInt(entreZeroEnumeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let numeroDeTentativas = 1;

// enquanto o chute não for igual ao n.s.
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if(chute === numeroSecreto) {
    let palavraTentativa = numeroDeTentativas > 1 ? "tentativas" : "tentativa"; 
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${numeroDeTentativas} ${palavraTentativa}`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }
    numeroDeTentativas++;
}