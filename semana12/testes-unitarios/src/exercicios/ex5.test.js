import { ordenarArrayEmOrdemCrescente } from "./ex5";

describe("Ordena array em ordem crescente", () => {
  it("O array [4, 2, 3, 2, 1] deverá ficar [1, 2, 2, 3, 4]", () => {
    const teste = [4, 2, 3, 2, 1];
    const resultado = ordenarArrayEmOrdemCrescente(teste);
    expect(resultado).toMatchObject([1, 2, 2, 3, 4])
  });
});
