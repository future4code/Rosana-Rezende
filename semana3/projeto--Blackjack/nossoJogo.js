import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const cartaUsuario1 = comprarCarta();
const cartaUsuario2 = comprarCarta();
const cartasUsuario = cartaUsuario1.texto + " " + cartaUsuario2.texto;
const pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor;

const cartaPc1 = comprarCarta();
const cartaPc2 = comprarCarta();
const cartasPc = cartaPc1.texto + " " + cartaPc2.texto;
const pontosPc = cartaPc1.valor + cartaPc2.valor;

console.log("Bem vindo ao jogo Blackjack");

if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Usuário - cartas: ", cartasUsuario, " -  pontuação ", pontosUsuario)
   console.log("Computador - cartas: ", cartasPc, " -  pontuação ", pontosPc);
   if (pontosUsuario > pontosPc) {
      console.log("O usuário ganhou!")
   } else if (pontosUsuario < pontosPc) {
      console.log("O computador ganhou!")
   } else if (pontosUsuario === pontosPc) {
      console.log("Empate!")
   };
} else {
   console.log("O jogo acabou.")
};

