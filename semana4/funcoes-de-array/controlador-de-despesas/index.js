class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

const arrayDeDespesas = []

const cadastraDespesa = () => {
    // PEGAR VALORES
    const novoValor = document.getElementById("novo-valor").value
    const novoTipo = document.getElementById("novo-tipo").value
    const novaDescricao = document.getElementById("nova-descricao").value

    if ((novoValor === "") || (novoValor === "") || (novaDescricao === "")) {
        alert("Preencha todos os campos do Controlador de Despesas para continuar")
    } else {
        // GUARDAR VALORES NA ARRAY
        // - primeiro constrói a instância
        const novaDespesa = new Despesa(novoValor, novoTipo, novaDescricao)
        // - depois adiciona na array
        arrayDeDespesas.push(novaDespesa)

        // LIMPAR
        document.getElementById("novo-valor").value = ""
        document.getElementById("novo-tipo").value = ""
        document.getElementById("nova-descricao").value = ""

        console.log(arrayDeDespesas)

        colocarNaPagina(novoValor, novoTipo, novaDescricao)
        valorTotal(arrayDeDespesas)
        valorDespesa(arrayDeDespesas)
    }
}

function colocarNaPagina(novoValor, novoTipo, novaDescricao) {
    // se eu não colo a função na acima, usando aquelas variaveis, retorna [OBJECT OBJECT]
    document.getElementById("exibicao").innerHTML +=
        "<div><p>Valor: <b><i>" + novoValor +
        "</i></b><p>Tipo de despesa: <b><i>" + novoTipo +
        "</i></b><p>Descrição: <b><i>" + novaDescricao + "</i></b></p></div>"
}


function valorTotal(arrayDeDespesas) {
    let total = 0
    for (let i = 0; i < arrayDeDespesas.length; i++) {
        let novoValor = Number(arrayDeDespesas[i].valor)
        total += novoValor
    }
    document.getElementById("total").innerHTML = "<b>Valor Total: </b>" + total

}


function valorDespesa(arrayDeDespesas) {

    // -------------------- CASA
    // filtra 
    const filtroCasa = arrayDeDespesas.filter((despesa) => {
        return despesa.tipo === "casa"})
    //mapear valores
    const arrayCasa = filtroCasa.map( (casa, index, array) => {
        return casa.valor})
    // somar os valores mapeados
    let totalCasa = 0
    for(let i = 0; i < arrayCasa.length; i++) {
        totalCasa += Number(arrayCasa[i])}    
    
    // -------------------- ALIMENTAÇÃO
    const filtroAlimentacao = arrayDeDespesas.filter((despesa) => {
        return despesa.tipo === "alimentacao"})
    const arrayAlimentacao = filtroAlimentacao.map( (alimento, index, array) => {
        return alimento.valor})
    let totalAlimentacao = 0
    for(let i = 0; i < arrayAlimentacao.length; i++) {
        totalAlimentacao += Number(arrayAlimentacao[i])}
    
    // -------------------- TRANSPORTE
    const filtroTransporte = arrayDeDespesas.filter((despesa) => {
        return despesa.tipo === "transporte"})
    const arrayTransporte = filtroTransporte.map( (transporte, index, array) => {
        return transporte.valor})
    let totalTransporte = 0
    for(let i = 0; i < arrayTransporte.length; i++) {
        totalTransporte += Number(arrayTransporte[i])}

    // -------------------- EDUCAÇÃO
    const filtroEducacao = arrayDeDespesas.filter((despesa) => {
        return despesa.tipo === "educacao"})
    const arrayEducacao = filtroEducacao.map( (educacao, index, array) => {
        return educacao.valor})
    let totalEducacao = 0
    for(let i = 0; i < arrayEducacao.length; i++) {
        totalEducacao += Number(arrayEducacao[i])}

    // -------------------- OUTROS
    const filtroOutros = arrayDeDespesas.filter((despesa) => {
        return despesa.tipo === "outros"})
    const arrayOutros = filtroOutros.map( (outros, index, array) => {
        return outros.valor})
    let totalOutros = 0
    for(let i = 0; i < arrayOutros.length; i++) {
        totalOutros += Number(arrayOutros[i])}

    // -------------------- jogar no HTML
    document.getElementById("extrato").innerHTML = 
        "<p><i>Despesas Casa: </i>" + totalCasa + "</p>"
        + "<p><i>Despesas Alimentação: </i>" + totalAlimentacao + "</p>"
        + "<p><i>Despesas Transporte: </i>" + totalTransporte + "</p>"
        + "<p><i>Despesas Educação: </i>" + totalEducacao + "</p>"
        + "<p><i>Outras despesas: </i>" + totalOutros + "</p>"

}

const filtraDespesas = () => {
    const filtro = arrayDeDespesas.filter((despesa) => {
        const filtraTipo = document.getElementById("filtrar-tipo").value
        const filtraValorMinimo = document.getElementById("filtrar-valor-minimo").value
        const filtraValorMaximo = document.getElementById("filtrar-valor-maximo").value

        if ((filtraTipo === "") || (filtraValorMinimo === "") || (filtraValorMaximo === "")) {
            alert("Preencha todos os campos de Despesas Detalhadas para continuar")
        } else {
            return despesa.tipo === filtraTipo && despesa.valor >= filtraValorMinimo && despesa.valor <= filtraValorMaximo
        }
    })
    // LIMPAR
    document.getElementById("filtrar-tipo").value = ""
    document.getElementById("filtrar-valor-minimo").value = ""
    document.getElementById("filtrar-valor-maximo").value = ""

    colocarNaPagina2(filtro)
    console.log(filtro)
}

function colocarNaPagina2(filtro) {
    // usei forEach pq estava retornando UNDEFINED
    filtro.forEach((despesa, index, array) => {
        let filtradoTipo = despesa.tipo
        let filtradoValor = despesa.valor
        let filtradoDescricao = despesa.descricao
        document.getElementById("dentro-filtragem").innerHTML +=
            "<div><p>Valor: <b><i>" + filtradoTipo +
            "</i></b><p>Tipo de despesa: <b><i>" + filtradoValor +
            "</i></b><p>Descrição: <b><i>" + filtradoDescricao + "</i></b></p></div>"
    })
}

const apagaFiltragem = () => {
    document.getElementById("dentro-filtragem").innerHTML = ""
}
