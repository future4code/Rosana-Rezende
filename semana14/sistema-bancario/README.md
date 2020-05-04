# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Projeto: POC - Sistema Bancário

### Escopo do projeto
Usando a linguagem Typescript, criar uma Prova de Conceito (POC) com funcionalidades de um sistema bancário.

<br>

#### Funcionalidades

- **Criar Conta**

    Um cliente pode criar uma conta no banco se tiver idade maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem persistir, também, todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

<br>

- **Pegar Saldo**

    O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 

<br>

- **Adicionar saldo** 🌚

    O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

<br>

- **Pagar Conta**

    Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.

<br>

- **Transferência Interna**

    A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

<br>

#### Requisitos mínimos

Implemenentar, no mínimo, as funcionalidades de criar conta e pegar as contas, além de adicionar uma validação de idade.


Etapas de desenvolvimento sugerida:
1. Criem um tipo para representar uma conta para o usuário
2. Criem mais um tipo: para representar as transações que serão salvas no extrato
3. Criem uma função (`createAccount`) que será responsável por cadastrar um usuário em um arquivo `JSON`. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
4. Criem uma função (`getAllAccounts`) que será responsável por pegar todos os usuários existentes no arquivo `JSON`.
5. Adicione, uma validação na função do item 1 (`createAccount`): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exibam uma mensagem de erro.

<br>

#### Desafios

Os desafios incluem terminar as demais funcionalidades.

Etapas de desenvolvimento sugerida:
1. Adicionem mais uma validação na função do item 1 (`createAccount`): verifiquem se o CPF passado já não está atrelado a alguma conta existente.
2. Criem uma função (`getBalance`) que receba um nome e um CPF e retorne o saldo da conta do usuário. Ambas informações devem ser iguais ao que estiver salvo no sistema; se, ao menos, uma delas for diferente, exibam uma mensagem de erro.
3. Criem uma função que receba (`addBalance`) um nome, um CPF e um valor. Ela deve adicionar o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema; se, ao menos, um deles for diferente, exiba uma mensagem de erro.
4. Alterem a função `addBalance` para que ela adicione um item ao extrato da conta do usuário: indicando o valor e a data da transação. A descrição para este tipo de item deve ser a mesma ("Depósito de dinheiro")
5. Criem uma função (`payBill`) que permita ao cliente pagar uma conta. Ela deve receber uma data, uma descrição e um valor; e salvar uma transação no extrato da conta. O saldo do usuário **não** deve ser atualizado neste momento. Caso nenhuma data seja passada, considere que o pagamento deve ser feito hoje.
6. Criem uma nova função: `updateBalance`. Ela será responsável por atualizar o saldo do cliente. Para isto, percorram os itens do extrato e atualize o saldo somente para as contas cujas datas são anteriores a hoje. 
7. Adicionem uma validação à função do item 1 deste dasafio (`payBill`): o usuário não pode colocar uma data que já passou.
8. Adicionem mais uma validação à função do item 1 deste desafio (`payBill` ): o usuário não pode tentar fazer um pagamento cujo valor seja maior do que seu saldo atual.
9. Criem uma função (`performTransfer`)para permitir a transferência entre contas internas do banco. O usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor. Para cada transferência, criem um item do extrato para as duas contas envolvidas. Os saldos de ambas não devem ser atualizadas neste momento. (A função `updateBalance`, que vocês implementaram, já deve fazer isso) @
10. Adicionem uma validação para a função `performTransfer`: verificar se o saldo do usuário é suficiente para a transferência. Se não for, exiba uma mensagem de erro.
11. Adicionem mais uma validação para a função `performTransfer`: verificar se ambas as contas (do remetente e destinatário) existem. Exibam uma mensagem de erro, se não existir.