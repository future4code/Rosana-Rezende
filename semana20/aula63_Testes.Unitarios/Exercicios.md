# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 63 - Testes unitários e Mocks

### Exercício 1

O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força. 

A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o usuário consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e, ao chegar no `0`, eles morrem.

*a. Crie uma interface para representar os personagens*

_Resposta_:

```ts
interface Character {
    name: string,
    life: number,
    defense: number,
    force: number
}
```

<br>

*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazias. Em relação a vida, defesa e força, elas só podem possuir valores iguais a 0 ou maiores*

_Resposta_:

```ts
export function validateCharacter(input: Character): boolean {
    if(
        !input.name ||
        input.life === undefined ||
        input.defense === undefined ||
        input.force === undefined
    ){
        return false
    }

    if(
        input.life < 0 ||
        input.defense < 0 ||
        input.force < 0
    ){
        return false
    }
    return true
}
```

<br><br>

### Exercício 2

Agora, vamos realizar o teste unitário da função `validateCharacter`

*a. Crie um teste que represente o comportamento da função com um personagem com o nome vazio*

_Resposta_:

```ts
it("Should return false when the character's name is empty", () => {
        const input = {
            name: "",
            life: 10,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
})
```

<br>

*b. Crie um teste que represente o comportamento da função com um personagem com a vida vazia*

_Resposta_:

```ts
it("Should return false when the character's life is empty", () => {
        const input = {
            name: "Rosana",
            life: undefined,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
})
```

<br>

*c. Crie um teste que represente o comportamento da função com um personagem com a força vazia*

_Resposta_:

```ts
it("Should return false when the character's force is empty", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: undefined
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
})
```

<br>

*d. Crie um teste que represente o comportamento da função com um personagem com a defesa vazia*

_Resposta_:

```ts
it("Should return false when the character's defense is empty", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: undefined,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
})
```

<br>

*e. Crie um teste que represente o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*

_Resposta_:

```ts
it("Should return false when the character's life, force or defense is negative", () => {
        const input1 = {
            name: "Rosana",
            life: -10,
            defense: 10,
            force: 10
        }
        const input2 = {
            name: "Rosana",
            life: 10,
            defense: -10,
            force: 10
        }
        const input3 = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: -10
        }
        const output1 = validateCharacter(input1)
        const output2 = validateCharacter(input2)
        const output3 = validateCharacter(input3)
        expect(output1).toBe(false)
        expect(output2).toBe(false)
        expect(output3).toBe(false)
})
```

<br>

*f. Crie um teste que represente o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor `0`*

_Resposta_:

```ts
it("Should return true when the character's life, force or defense is 0", () => {
        const input1 = {
            name: "Rosana",
            life: 0,
            defense: 10,
            force: 10
        }
        const input2 = {
            name: "Rosana",
            life: 10,
            defense: 0,
            force: 10
        }
        const input3 = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: 0
        }
        const output1 = validateCharacter(input1)
        const output2 = validateCharacter(input2)
        const output3 = validateCharacter(input3)
        expect(output1).toBe(true)
        expect(output2).toBe(true)
        expect(output3).toBe(true)
})
```

<br>

*g. Crie um teste que represente o comportamento da função com um personagem com as informações validas*

_Resposta_:

```ts
it("Should return true when the character's input is valid", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(true)
})
```

<br><br>

### Exercício 3

Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Characrter`. 

O comportamento dela deve ser:

- Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
- Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
- 

 Você deve fazer duas implementações dessas funções

*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

_Resposta_:

```ts
export function performAttack(attacker: Character, defender: Character) {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    const result = attacker.force - defender.defense
    if(defender.defense < attacker.force){
        defender.life -= result
    }
}
```

<br>

*b. Implemente a função utilizando inversão de dependências*

_Resposta_:

```ts
export function performAttack(
    attacker: Character, 
    defender: Character,
    validator: (input: Character) => boolean
    ) {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    const result = attacker.force - defender.defense
    if(defender.defense < attacker.force){
        defender.life -= result
    }
}
```

<br>

*c. Explique, com as suas palavras, as diferenças entre as duas implementações*

_Resposta_:
Na primeira implementação a função performAttack depende do funcionamento da função validateCharacter, e essa interdependência faz com que a função performAttack não possa ser testada (o teste unitário não é viável).
Na segunda implementação retiramos essa dependência, fazemos a chamada inversão de dependência, o que permite que performAttack possa ser testada.

<br><br>

### Exercício 4

Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 

Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.

Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:

```tsx
test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})
```

Em um arquivo de teste feito só para esse treino:

*a. De qual das duas funções (`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.*

_Resposta_: Precisamos criar um mock da validateCharacter, já que para testar a função performAttack é necessário ter uma função que faça validação, mas não queremos criar dependência entre elas.


<br>

*b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento*

_Resposta_:

```ts
const mockValidateCharacterTrue = jest.fn(() => true)
```

<br>

*c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento*

_Resposta_:

```ts
const mockValidateCharacterFalse = jest.fn(() => false)
```

<br><br>

### Exercício 5

Agora, vamos criar testea unitário da nossa função `performAttack`. Como ela utiliza a `validateCharacter`, vamos ter que criar um Mock dela (resposta do item a do exercício 4). 

*a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*

_Resposta_:

```ts
it("Should decrease the life of the defender when validate charater is true", () => {
        const attacker = {
            name: "Rosana",
            life: 1500,
            defense: 100,
            force: 700
        }
        const defender =  {
            name: "Cleiton",
            life: 1500,
            defense: 500,
            force: 100
        }
        performAttack(attacker, defender, mockValidateCharacterTrue)
        expect(attacker).toEqual({
            name: "Rosana",
            life: 1500,
            defense: 100,
            force: 700
        })
        expect(defender).toEqual({
            name: "Cleiton",
            life: 1300,
            defense: 500,
            force: 100
        })
        expect(mockValidateCharacterTrue).toHaveBeenCalled()
        expect(mockValidateCharacterTrue).toHaveBeenCalledTimes(2)
        expect(mockValidateCharacterTrue).toHaveReturnedTimes(2)
})
```

<br>

*b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.*

_Resposta_:

```ts
it("Should return an error message when validate charater is false", () => {
        expect.assertions(4)
        try{
            const attacker = {
                name: "Rosana",
                life: 1500,
                defense: 100,
                force: 400
            }
            const defender =  {
                name: "Cleiton",
                life: 1500,
                defense: 500,
                force: 100
            }
            performAttack(attacker, defender, mockValidateCharacterFalse)
        } catch(err) {
            expect(err.message).toBe("Invalid Character")
            expect(mockValidateCharacterFalse).toHaveBeenCalled()
            expect(mockValidateCharacterFalse).toHaveBeenCalledTimes(1)
            expect(mockValidateCharacterFalse).toHaveReturnedTimes(1)
        }
})
```

<br><br>

### Exercício 6

Agora é a sua vez para pensar e testar. Faça mais 4 testes da função performAttack. Treine o máximo que puder os conceitos vistos em aula 

_Resposta_:

```ts
```

<br><br>

### Exercício 7 (DESAFIO)

Vamos continuar o nosso joguinho, fazendo mais algumas funções:

- `recoverCharacters(characters: Character[]): void`

    *Historinha: no nosso jogo, as personagens recuperam a vida com um xamã. Ele só faz rituais que recuperam, no mínimo, dois personagens.*

    Uma receba um array de personagens, faça as verificações necessárias em cada um deles e retorne o array com as personagens com a vida máxima (`1500`). Caso o array tenha menos de dois itens, jogue um erro.

- `increaseChatacterAttack(character: Character, newAttack: number): void`

    *Historinha: no nosso jogo, a personagem deve sempre treinar para que aumente o seu ataque. Os treinos só podem aumentar o ataque, nunca dimiuir*

    Ela deve aumentar o ataque da personagem. Caso o novo ataque passado seja menor do que o atual ataque do personagem, deve devolver um erro. Além disso, essa função deve verificar as informações da personagem antes de aumentar o ataque

- `decreaseCharacterDefense(character: Character, newDefense: number): void`

    *Historinha: no nosso jogo, a defesa da personagem é feita por um escudo. Ao decorrer das batalhas, o escudo vai se degradando, diminuindo a defesa dela*

    Ela deve diminuir a defesa da personagem. Caso a nova defesa passado seja maior do que a defesa atual do personagem, deve devolver um erro. Além disso, essa função deve verificar as informações da personagem antes de diminiuir a defesa.


<br><br>

### Exercício 8 (DESAFIO)

Realize os testes unitários dessas três funções, com, no mínimo 4 testes cada um. Ao menos um desses testes deve verificar o novo status do personagem (se a vida aumentou, se o ataque aumentou, etc.)

<br><br>

