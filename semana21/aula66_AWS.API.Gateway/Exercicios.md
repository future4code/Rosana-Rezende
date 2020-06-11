

### Exercício 1

**Tarefa 1**
Comece esses exercícios, criando uma nova lambda no console da AWS e disponibilizando-a ao mundo através de uma API configurada no *API Gateway*.

_Resposta_: https://gg8iidkaaf.execute-api.us-east-1.amazonaws.com/v1

<br><br>

**Tarefa 2**

O código abaixo representa uma Lambda preparada para receber um evento do API Gateway

```jsx
const verifyExistence = input => {
  return input !== undefined && input !== null;
};

exports.handler = async event => {
  try {
    const hasBody =
      verifyExistence(event.body) &&
      Object.keys(JSON.parse(event.body)).length !== 0;

    const hasQueries = verifyExistence(event.queryStringParameters);

    if (!hasBody && !hasQueries) {
      throw new Error("Missing input!");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        hasBody,
        hasQueries
      })
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: err.message
      })
    };
  }
};
```

Responda às perguntas abaixo:

1. Sem rodar esse código, dê três exemplos de entrada e saída da função `verifyExistence`

_Resposta_: Acredito que as entradas virão do evento, por exemplo através do `body`, `headers` e `queryStringParams`. As saídas, por sua vez, podem ser de sucesso ou erro, como visto abaixo:

```js
{
  statusCode: 200,
  body: {
    hasBody: true,
    hasQueries: false
  }
}


{
  statusCode: 200,
  body: {
    hasBody: true,
    hasQueries: true
  }
}

{
  statusCode: 400,
  body: {
   message: "Missing input!"
  }
}
```

<br>

2. Por que precisamos utilizar o comando `JSON.parse(event.body)`?

_Resposta_: Porque o body vem como uma string, logo para acessar seus elementos é preciso transformá-lo primeiro.

<br>

3. Explique em que situação essa lambda retorna um código de `200` e qual o valor do `body` nesse caso

_Resposta_: Retornará um código 200 sempre que for enviado algo por meio do `body` ou das `queryStringParameters`.

<br>

4. Explique em que situação essa lambda retorna um código de erro `400` com a mensagem `Missing Input`

_Resposta_: Sempre que o hasbody e o hasQueries vierem undefined, ou seja, é preciso que não venha nenhum parâmetro nem pelo body nem pelas queryStringParameters.

<br>

5. Suba essa função na lambda que você criou anteriormente e faça os testes necessários.

_Resposta_: Feito!

<br><br>

**Tarefa 3**

Crie uma função para fazer uma rápida validação de um CEP. Considere que ela receba uma `string` e devolva um `boolean`: `true` caso o CEP seja válido ou `false` caso não seja. 

Você pode considerar um CEP como válido se:

- Possuir um, ao menos, 8 digitos
- Possuir somente um `-`

_Resposta_:

```js
exports.handler = async event => {
    try {
        const CEP = JSON.parse(event.body).CEP

        if (CEP.length >= 8 && CEP.indexOf("-") !== -1) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: true
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: false
            })
        };
    
    }
    catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: err.message
            })
        };
    }

};
```

<br><br>

### Exercício 2

Nesse exercício, precisamos praticar o uso do template que permitirá rodarmos uma Lambda localmente ou *deployada* utilizando express.

- Passo a passo de Configuração da Lambda

    **API Gateway**

    1. Criar um recurso de `proxy` no API Gatewat
    2. Habilitar CORS

    **Lambda**

    1. Lembrar de fazer a conversão das entradas e saídas entre a Lamba e o Express
    2. Colocar as variáveis de ambiente
    3. Modificar a localização do handler (de `index.handler` para `lambda.handler`)
    4. Aumentar o timeout da lambda

<br><br>

**Tarefa 4**

Configure a sua API para sempre chamar a mesma Lambda independente do `path` utilizado, caso já não a tenha configurado assim. Para isso, lembre-se do que fizemos em aula (uso do `proxy`)

_Resposta_: Feito!

<br><br>

**Tarefa 5**

Crie uma tabela que represente um produto de uma loja, que deve possuir: um nome, uma foto e um preço. Faça um endpoint que permita criar um novo produto. Ao terminar, suba-o em uma lambda e realize testes utilzando o Postman.

_Resposta_: Feito!

<br><br>

**Tarefa 6**

Agora, crie outro endpoint que deve receber um id através de pathParams e devolve o produto guardado com esse id. Ao terminar suba TODO O BACKEND (ou seja, esse endpoint e o anterior) em uma lambda e realize testes utilzando o Postman.

Responda: o que foi o mais difícil de fazer nesse processo? Por quê?

_Resposta_: Feito!
O mais difícil foi reassitir as aulas pra entender o passo a passo. Acredito que daqui pra frente deva ficar mais fácil.
