import { removeItensDuplicados } from "./ex4";

describe("Remove itens duplicados", () => {
  
  it("O array [1, 2, 3, 2, 4] deverá ficar [1, 2, 3, 4]", () => {
    const teste = [1, 2, 3, 2, 4];
    const resultado = removeItensDuplicados(teste);
    expect(resultado).toMatchObject([1, 2, 3, 4]) //toBe não funciona
  });

  it("O array [0,2,3,2,1,0] deverá ficar [0,2,3,1]", () => {
    const teste = [0,2,3,2,1,0];
    const resultado = removeItensDuplicados(teste);
    expect(resultado).toEqual([0,2,3,1])
  });

});
