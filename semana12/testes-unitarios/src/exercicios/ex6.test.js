import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Todas as palavras com letra maíscula", () => {
  
  it("A frase 'Oi! Sou uma string bem legal para testes!' deverá ficar 'Oi! Sou Uma String Bem Legal Para Testes!'", () => {
    const frase = "Oi! Sou uma string bem legal para testes!";
    const resultado = primeirasLetrasParaMaiusculas(frase);
    const novaFrase = "Oi! Sou Uma String Bem Legal Para Testes!"
    expect(resultado).toBe(novaFrase)
  });

  it("A frase 'oi, sou aluno da future4!' deverá ficar 'Oi, Sou Aluno Da Future4!'", () => {
    const frase = "oi, sou aluno da future4!";
    const resultado = primeirasLetrasParaMaiusculas(frase);
    const novaFrase = "Oi, Sou Aluno Da Future4!"
    expect(resultado).toBe(novaFrase)
  });

});
