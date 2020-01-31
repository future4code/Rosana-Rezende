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
const cartaPc1 = comprarCarta();
const cartaPc2 = comprarCarta();

let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor
let pontosPc = cartaPc1.valor + cartaPc2.valor
let cartasUsuario = cartaUsuario1.texto + cartaUsuario2.texto
let cartasPc = cartaPc1.texto + cartaPc2.texto


if (confirm("Quer iniciar uma nova rodada?")) {
   if (((cartaUsuario1.valor === 11) && (cartaUsuario2.valor === 11))
      || ((cartaPc1.valor === 11) && (cartaPc1.valor === 11))) {
      window.location.reload()
   } else {
      if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " + cartaPc1.texto + ".\nDeseja comprar mais uma carta?")) {
         while (pontosUsuario < 21) {
            const cartaUsuario3 = comprarCarta();
            const cartaPc3 = comprarCarta();
            pontosUsuario += cartaUsuario3.valor
            pontosPc += cartaPc3.valor
            cartasUsuario += cartaUsuario3.texto
            cartasPc += cartaPc3.texto
         }
      } 
      if (((pontosUsuario > pontosPc) || (pontosPc > 21)) && (pontosUsuario <= 21)) {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
            ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". O usuário ganhou!")
      } else if (((pontosUsuario < pontosPc) || (pontosUsuario > 21)) && (pontosPc <= 21)) {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
            ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". O computador ganhou!")
      } else if (((pontosUsuario === 21) && (pontosPc === 21))) {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
            ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". Empate!")
      } else {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
         ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". Ninguém ganhou!")
      }
   }
} else {
   console.log("O jogo acabou.")
}

