import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  
  it("O número sorteado deve estar entre n1 e n2", () => {
    const n1 = 1
    const n2 = 100   
    const resultado = sorteiaNumero(n1, n2);
    const rasultadoValido = resultado > n1 && resultado < n2;
    expect(rasultadoValido).toBe(true)
  });

});
