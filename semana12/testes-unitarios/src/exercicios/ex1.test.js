import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Múltiplo de 400 - Imprime true no console quando ano = 1600 ", () => {
    const ano = 1600
    const resultado = anoBissexto(ano)
    expect(resultado).toBe(true)
  });

  it("Múltiplo de 4, exceto múltiplo de 100 que não 400 - Imprime true no console quando ano = 1996 ", () => {
    const ano = 1996
    const resultado = anoBissexto(ano)
    expect(resultado).toBe(true)
  });

  it("Não é bissexto qq outro ano - Imprime false no console quando ano = 1997", () => {
    const ano = 1997
    const resultado = anoBissexto(ano)
    expect(resultado).toBe(false)
  })

});
