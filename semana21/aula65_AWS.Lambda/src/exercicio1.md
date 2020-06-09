Leia atentamente a função abaixo e responda todas as perguntas:

```jsx
exports.handler = async event => {
  if (!event.user || !event.user.info) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing input" })
    };
  }
  const user = {
    name: event.user.info.name,
    email: event.user.info.email,
    password: event.user.info.password
  };

  if (!user.name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" })
    };
  }
  if (!user.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing email" })
    };
  }
  if (!user.password || user.password.length < 6) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid password" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User is correct"
    })
  };
};
```

<br>

**A)** Há alguma coisa que você não entendeu nesse código? Se tiver, converse com colegas ou crie um atendimento para esclarecimentos.

_Resposta_: Entendi o código

<br>

**B)** Qual o retorno da função se ela receber um objeto vazio de entrada?

_Resposta_: Missing input

<br>

**C)** c. Qual o retorno da função se ela receber este objeto como entrada:

```json
{
	"user": {
		"name": "Astrodev"
	}
}
```

_Resposta_: Missing input

<br>

**D)** d. Qual o retorno da função se ela receber este objeto como entrada:

```json
{
  "user": {
		"info": {
			"name": "Astrodev"
		}
  }
}
```

_Resposta_: Missing email

<br>


**E)** e. Qual o retorno da função se ela receber este objeto como entrada:

```json
{
  "user": {
		"info": {
			"name": "Astrodev",
			"email": "astrodev@f4.com.br",
			"password": "12345"
		}
  }
}
```

_Resposta_: Invalid password

<br>


**F)** f. Qual o retorno da função se ela receber este objeto como entrada:

```json
{
  "user": {
		"info": {
			"name": "Astrodev",
			"email": "astrodev@f4.com.br",
			"password": "123456"
		}
  }
}
```

_Resposta_: User is correct

<br>


**G** Onde devemos alterar para que a função retorne o status 422 caso o email seja inválido?

_Resposta_: Após o terceiro if podemos criar o seguinte:

```js
if (user.email.indexOf("@") === -1)) {
    return {
      statusCode: 422,
      body: JSON.stringify({ message: "Invalid email" })
    };
  }
```

<br>

**H** Qual deve ser o objeto de entrada para que a função retorne o status 200?

_Resposta_: 

```json
{
  "user": {
		"info": {
			"name": "Astrodev",
			"email": "astrodev@f4.com.br",
			"password": "123456"
		}
  }
}
```
