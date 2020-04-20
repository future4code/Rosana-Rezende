# Future4 | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

<p align="center">
  <img  width='500' src='https://user-images.githubusercontent.com/45580434/74607837-f69f5e00-50ba-11ea-97e0-62fab855bcb6.png'>
</p>

## Projeto: FutureForms

[Site do projeto](http://futureforms-rosana1.surge.sh/)

![futureforms](https://user-images.githubusercontent.com/45580434/74693970-df509580-51cc-11ea-8bac-2bbb96aaef8d.gif)

**Desenvolvido por:** [Rosana Rezende](https://www.linkedin.com/in/rosanarezende/)
<br>

### Escopo do projeto
Criar concorrente para o GoogleForms, implementando um formulário de processo seletivo com várias etapas, cuja ordem depende das respostas dadas pelos usuário.
<br><br>


#### Requisitos obrigatórios


[x] *ETAPA 1: Dados gerais*
1. Nome [pergunta aberta]
2. Idade [pergunta aberta]
3. Email [pergunta aberta]
4. Qual o grau de escolaridade [pergunta com seleção]
    - Ensino Médio Incompleto
    - Ensino Médio Completo
    - Ensino Superior Incompleto
    - Ensino Superior Completo
<br>

[x] *ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior*
1. Qual o curso? [pergunta aberta]
2. Qual a unidade de ensino? [pergunta aberta]
<br>

[x] *ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando*
1. Por que você não terminou um curso de graduação? [pergunta aberta]
2. Você fez algum curso complementar? [pergunta com seleção]
    - Curso técnico
    - Cursos de inglês
    - Não fiz curso complementar

[x] *ETAPA FINAL: O formulário acabou*
1. Deve conter alguma frase agradecendo ao usuário por ter respondido o formulário.


<br><br>
#### Desafios

[x] 1. *O usuário só deve responder a Etapa 2, se ele tiver respondido "Ensino Superior Completo" ou "Ensino Superior Incompleto" (na pergunta 4 da etapa 1); e a etapa 3, se a resposta for "Ensino Médio Completo" ou "Ensino Médio Incompleto".*
<br>

[x] 2. *Faça com que o usuário não consiga prosseguir para a próxima etapa até que todas as perguntas da etapa atual estejam respondidas. Mostre um alert com a mensagem "Você deve preencher todas as perguntas antes de continuar"*
<br>

[] 3. *Faça com que só algumas perguntas sejam obrigatórias. Se o usuário não a preencher, um erro deve ser mostrado acima da pergunta, indicando que deve ser preenchida. O usuário não pode prosseguir nas etapas até que todas as perguntas obrigatórias da etapa atual estejam respondidas. Mantenha o alert que pedimos no item anterior.*
<br>


