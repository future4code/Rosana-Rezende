# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Sistema de Energia Elétrica

### Escopo
Construir um sistema para auxiliar o cálculo de contas de energia elétrica para uma concessionária.

O valor base de cada kWh (unidade de consumo de energia) é R$0.75. 

O custeamento depende do tipo do cliente:
- Cliente Residencial: paga a tarifa cheia (ou seja, R$0.75). 
- Cliente Comercial: possui um desconto de 30% do valor total (ou seja, paga R$0.53). 
- Cliente Industrial: há um desconto de 40% do valor total (ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na fábrica.

<br>

#### Exercícios

Levando em conta as 5 entidades desse sitesma (Place, Client, Industry, Commerce e Residence), resolva:

<br>

**Exercício 1**

Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados abaixo.

```tsx
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
```

Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

a. *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*

<br>

**Exercício 2**

Agora, vamos ver a classe **Place**.

```tsx
export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
```

Essa classe é abstrata porque está representando um tipo de informação que simplesmente **abstrai** e **armazena** as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*

b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

<br>

**Exercício 3**

Esse exercício vai responder melhor a essas três perguntas: 

1. *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
2. *Por que a `Place` não é uma interface?*
3. *Por que a classe `Place` é uma Classe Abstrata?*

Será um pouco mais longo, mas esperamos que seja esclarecedor.

Vamos começar lendo três classes. 

A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores (`residentsQuantity`)

```tsx
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
}
```

A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os andares desse lugar comercial (`floorsQuantity`)

```tsx
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
}
```

A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas de lá (`machinesQuantity`)

```tsx
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }
}
```

Agora, crie uma instância de cada uma das classes novas. Imprima no console o CEP de cada uma delas, através do método `getCep` herdado da classe `Place`. Devido à propriedade do **Polimorfismo**, uma classe filha de uma classe pai é também do mesmo **tipo** da pai. Ou seja, a `Residence`, a `Commerce` e a `Industry` são do tipo `Place`. Dessa forma, uma instância da `Residence` também é uma instância da classe `Place`. Uma instância da `Commerce` também é da classe `Place` (o mesmo se aplica para a `Industry`). **Isso responde à primeira pergunta**: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

As residências, os comércios e as indústrias são lugares muito diferentes. Tendem a ter arquiteturas muito distintas, porque são para propósitos diferentes. Quando estamos modelando e encontramos uma situação dessa - três "entidades" muito diferentes - **é um indício de que cada uma pode ter a sua própria classe;** assim, teremos mais liberdade para criar os métodos, as propriedades e os construtores para cada uma da melhor forma. Para exemplificar isso, criamos propriedades diferentes bem simples: quantidade de moradores, quantidade de andares e quantidade de máquinas. Só que há uma propriedade que todas elas possuem em comum: o CEP. Isso **sugere que criemos uma estrutura para armazenar esse dado: uma classe pai ou uma interface**. Qual escolher? Há vários motivos para a nossa escolha, mas aqui vamos explicar apenas um dos que a  justificam. As propriedades que uma classe herda de uma interface são **sempre públicas**. Logo, não temos a liberdade de modificar o acesso delas. No nosso caso, estamos representando lugares, certo? Um lugar é fixo, tem um endereço e um CEP que não mudam. Dessa forma, não vamos precisar modificar esse valor ao longo da nossa aplicação. Então o CEP deveria ser `protected` ou `private` para não darmos essa possibilidade. Não existe uma regra para escolher entre `protected` e `private`, mas deixamos `protected` só para facilitar o acesso a essa propriedade para as classes filhas, dado que é um dado importante e que **talvez** precise ser lido por elas. **Isso responde à segunda pergunta**: `Place` é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

Por fim, ela é abstrata por um motivo simples. O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles. Então não há motivos para querermos instanciar um objeto do tipo `Place` porque, no nosso contexto, todos os casos deles já estão cobertos por outras classes. **Isso responde à terceira pergunta**: `Place` é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

Ufa! 😪 

Antes de prosseguir, veja se entendeu tudo e não ficou com alguma dúvida. Foi muita informação de uma vez só.  

A parte prática desse exercício é tranquila: crie os getters de cada uma das propriedades protegidas dessas três classes.

<br>

**Exercício 4**

Agora, você vai começar a colocar a mão na massa!

Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.

Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**

a. *Que métodos e propriedades essa classe possui? Por quê?*

<br>

**Exercício 5**

Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.

Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**

a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*

b. *Quais as diferenças dessa classe com a `ResidentialClient`?*

<br>

**Exercício 6**

Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.

a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

b. *Que interface a `IndustrialClient` implementa? Por quê?*

c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

<br>

**Exercício 7**

Em sistemas complexos como esses é normal criarmos classes que simplesmente irão fazer alguma operação com as demais classes. Crie agora a classe `ClientManager` ("gerenciador de clientes"). Ela nos ajudará a guardar todos os clientes que existirem na nossa aplicação e calcular o valor total que todos pagarão. 

Para isso, vamos fazer o seguinte: comece criando uma propriedade privada chamada `clients`. Ela deve ser um array de `Client`.  Depois, crie um método chamado `getClientsQuantity` que deve retornar a quantidade de clientes registrados.

<br>

**Exercício 8**

Agora, para finalizar, iremos ver na prática o que já falamos mais de uma vez - **uma classe filha é do tipo da classe pai -** a propriedade chamada **Polimorfismo** ("tem várias formas", "tem vários tipos"). 

Vamos implementar a função `registerClient`. A ideia dela é simples: não queremos deixar que seja fácil alterar o array de clientes, porque seria um pouco perigoso não ter isso bem controlado. Então, esse método tem a tarefa de receber um `ResidentialClient` ou `CommercialClient` ou `IndustrialClient` e adicioná-lo no array. Inicialmente, isso te parece estranho?

Se formos ver o nosso código do `ClientManager`, vamos ver que ele possui um array de `Client`, certo? E acabamos de falar para você adicionar um objeto dos tipos `ResidentialClient` ou `CommercialClient` ou `IndustrialClient`. Por quê? Porque existe a propriedade do **Polimorfismo** que diz que: ***Quando uma classe implementa uma interface, ela possui o tipo dessa interface. Quando uma classe extende outra classe (é filha de outra), ela possui o tipo dessa classe***. Isso acontece porque uma classe **herda** **todas as propriedades e métodos** de interfaces e classes pais. Então, faz sentido que ela seja **do mesmo tipo** também, certo? 

Com isso, podemos fazer com que o método `registerClient` receba um `Client`, assim ele também vai aceitar que passemos como parâmetro instâncias das três classes filhas já citadas. Leia abaixo e entenda isso acontecendo:

```tsx
 class ClientManager {
	  private clients: Client[] = []
		
		// demais implementações
		
		public registerClient(client: Client): void {
			this.clients.push(client)
		}
 }

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient(...) // passar parêmetros
clientManager.push(residentialClient)

const commercialClient = new CommercialClient(...) // passar parêmetros
clientManager.push(commercialClient)

const industrialClient = new IndustrialClient(...) // passar parêmetros
clientManager.push(industrialClient)
```

Agora vamos mostrar uma vantagem disso. Quando declaramos a interface `Client`, colocamos um `registrationNumber`, que funciona como um `id`. Uma informação dessas é importante quando queremos pegar as informações de um usuário, ou seja, identificá-lo. Vamos criar agora uma função que recebe um `registrationNumber` e determina quanto esse cliente deve pagar (ou seja devolve um `number`)

```tsx
 class ClientManager {
	  private clients: Client[] = []
		
		// demais implementações
		
		public calculateBillOfClient(registrationNumber: number): number {
			// assinatura da função
		}
 }
```

O primeiro passo da sua implementação é achar o usuário salvo com esse `registrationNumber`. Para isso, podemos usar o método `find`. Ele funciona como o `filter` - recebe um `callback` que, por sua vez, deve retornar um `boolean`- mas, ao invés de retornar um array (como o filter), devolve um único elemento. Como o número de registro é único de cada cliente, o `find` é uma opção melhor.

```tsx
 class ClientManager {
	  private clients: Client[] = []
		
		// demais implementações
		
		public calculateBillOfClient(registrationNumber: number): number {
			
			const foundClient = this.clients.find((client) => {
				return client.registrationNumber === registrationNumber
			})

		}
 }
```

Dessa vez, iremos nos aproveitar do fato de que **todas as classes são `Client`** e, ****então, simplesmente, convocar a função `calculateBill` (que foi declarada inicialmente na classe Client).

```tsx
 class ClientManager {
	  private clients: Client[] = []
		
		// demais implementações
		
		public calculateBillOfClient(registrationNumber: number): number {
			
			const foundClient = this.clients.find((client) => {
				return client.registrationNumber === registrationNumber
			})
	
			if(foundClient){
					// verificando se o usuário existe
					return foundClient.calculateBill()
			}
			
			return 0;

		}
 }
```

Agora é a sua vez. Crie um método chamado `calculateTotalIncome`. Ele deve calcular o valor total que a concessionária vai receber, ou seja, a soma das contas de todos os clientes. Depois disso implemente o método `deleteUser` que recebe um número de registro e deleta esse usuário.

<br><br>

#### Desafio

**Desafio 1**

Crie um método chamado `printClients` que deve imprimir todos os clientes na tela seguindo o padrão:

    ```
    NOME DO CLIENTE - NÚMERO DE REGISTRO - TOTAL DE ENERGIA GASTA - TOTAL PAGO
    ```

<br>

**Desafio 2**

Agora temos que nos preocupar para garantir que não sejam criados mais de um usuário com  mesmo número de registro. Como você poderia fazer isso? (Usar um atributo estático talvez ajude!)

<br>

**Desafio 3**

Implemente a validação de CPF e CNPJ na hora de criar os clientes residenciais e comerciais. Eles não podem ser criados com CPF ou CNPJ inválidos. Pense bem o que você tem que mudar nas classes que já criou!