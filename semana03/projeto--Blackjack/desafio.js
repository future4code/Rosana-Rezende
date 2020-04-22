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
 */

// -----------------------------------------------------------  PRIMEIRA VERSÃO
// const cartaUsuario1 = comprarCarta();
// const cartaUsuario2 = comprarCarta();
// const cartaPc1 = comprarCarta();
// const cartaPc2 = comprarCarta();

// let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor
// let pontosPc = cartaPc1.valor + cartaPc2.valor
// let cartasUsuario = cartaUsuario1.texto + cartaUsuario2.texto
// let cartasPc = cartaPc1.texto + cartaPc2.texto


// if (confirm("Quer iniciar uma nova rodada?")) {
//    if (((cartaUsuario1.valor === 11) && (cartaUsuario2.valor === 11))
//       || ((cartaPc1.valor === 11) && (cartaPc1.valor === 11))) {
//       window.location.reload()
//    } else {
//       if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " + cartaPc1.texto + ".\nDeseja comprar mais uma carta?")) {
//          while (pontosUsuario < 21) {
//             const cartaUsuario3 = comprarCarta();
//             const cartaPc3 = comprarCarta();
//             pontosUsuario += cartaUsuario3.valor
//             pontosPc += cartaPc3.valor
//             cartasUsuario += cartaUsuario3.texto
//             cartasPc += cartaPc3.texto
//          }
//       } 
//       if (((pontosUsuario > pontosPc) || (pontosPc > 21)) && (pontosUsuario <= 21)) {
//          alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
//             ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". O usuário ganhou!")
//       } else if (((pontosUsuario < pontosPc) || (pontosUsuario > 21)) && (pontosPc <= 21)) {
//          alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
//             ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". O computador ganhou!")
//       } else if (((pontosUsuario === 21) && (pontosPc === 21))) {
//          alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
//             ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". Empate!")
//       } else {
//          alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontosUsuario +
//          ". As cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ". Ninguém ganhou!")
//       }
//    }
// } else {
//    console.log("O jogo acabou.")
// }


// -----------------------------------------------------------  SEGUNDA VERSÃO
console.log("Bem vindo ao jogo Blackjack");

if (confirm("Quer iniciar uma nova rodada?")) {

   // Sorteando as primeiras cartas
   let cartasUsuario = [comprarCarta(), comprarCarta()];
   let cartasPc = [comprarCarta(), comprarCarta()];

   // Criando variáveis para o jogo
   let pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
   let pontosPc = cartasPc[0].valor + cartasPc[1].valor;

   let cartasUsuarioTexto = cartasUsuario[0].texto + cartasUsuario[1].texto;
   let cartasPcTexto = cartasPc[0].texto + cartasPc[1].texto;

   // Verificação: as cartas iniciais são 2 ases?
   if (((cartasUsuario[0].valor === 11) && (cartasUsuario[1].valor === 11))
      || ((cartasPc[0].valor === 11) && (cartasPc[1].valor === 11))) {
      cartasUsuario = [];
      cartasUsuario = [comprarCarta(), comprarCarta()];
      cartasPc = [];
      cartasPc = [comprarCarta(), comprarCarta()];
   }

   // USUÁRIO
   while ((pontosUsuario < 21) && (confirm("Suas cartas são " + cartasUsuarioTexto + ". A carta revelada do computador é "
      + cartasPc[0].texto + ".\nDeseja comprar mais uma carta?"))) {
      cartasUsuario.push(comprarCarta());
      pontosUsuario += cartasUsuario[cartasUsuario.length - 1].valor;
      cartasUsuarioTexto += cartasUsuario[cartasUsuario.length - 1].texto;
   }

   // PC
   while ((pontosPc < 21) && (pontosPc < pontosUsuario)) {
      cartasPc.push(comprarCarta())
      pontosPc += cartasPc[cartasPc.length - 1].valor
      cartasPcTexto += cartasPc[cartasPc.length - 1].texto
   }

   // (adaptei, pq achei as orientações confusas - fui +- pelo jogo modelo e coloquei opção onde ninguém ganha)
   if (((pontosUsuario > pontosPc) || (pontosPc > 21)) && (pontosUsuario <= 21)) {
      alert("Suas cartas são " + cartasUsuarioTexto + ". Sua pontuação é " + pontosUsuario +
         ". As cartas do computador são " + cartasPcTexto + ". A pontuação do computador é " + pontosPc
         + ". O usuário ganhou!")
   } else if (((pontosUsuario < pontosPc) || (pontosUsuario > 21)) && (pontosPc <= 21)) {
      alert("Suas cartas são " + cartasUsuarioTexto + ". Sua pontuação é " + pontosUsuario +
         ". As cartas do computador são " + cartasPcTexto + ". A pontuação do computador é " + pontosPc
         + ". O computador ganhou!")
   } else if (pontosUsuario === pontosPc) {
      alert("Suas cartas são " + cartasUsuarioTexto + ". Sua pontuação é " + pontosUsuario +
         ". As cartas do computador são " + cartasPcTexto + ". A pontuação do computador é " + pontosPc
         + ". Empate!")
   } else {
      alert("Suas cartas são " + cartasUsuarioTexto + ". Sua pontuação é " + pontosUsuario +
         ". As cartas do computador são " + cartasPcTexto + ". A pontuação do computador é " + pontosPc
         + ". Ninguém ganhou!")
   }
}

else {
   console.log("O jogo acabou.")
}