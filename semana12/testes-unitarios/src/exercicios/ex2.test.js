import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Palíndromo - Retorna true quando nome = mirim", () => {
    const nome = "mirim"
    const resultado = checaPalindromo(nome);
    expect(resultado).toBe(true)
  });

  it("Palíndromo - Retorna true quando frase = Socorram-me subi no onibus em marrocos", () => {
    const frase = "Socorram-me subi no onibus em marrocos"
    const resultado = checaPalindromo(frase);
    expect(resultado).toBe(true)
  });

  it("Palíndromo - Retorna true quando frase = O alívio foi vilão", () => {
    const frase = "O alívio foi vilão"
    const resultado = checaPalindromo(frase);
    expect(resultado).toBe(true)
  });

  it("Não é palíndromo - Retorna false quando frase = nada", () => {
    const frase = "nada"
    const resultado = checaPalindromo(frase);
    expect(resultado).toBe(false)
  });

});
