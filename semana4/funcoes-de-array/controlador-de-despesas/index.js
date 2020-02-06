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
    }
}

function colocarNaPagina(novoValor, novoTipo, novaDescricao) {
    document.getElementById("exibicao").innerHTML +=
        "<div><p>Valor: <b><i>" + novoValor +
        "</i></b><p>Tipo de despesa: <b><i>" + novoTipo +
        "</i></b><p>Descrição: <b><i>" + novaDescricao + "</i></b></p></div>"
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

    colocarNaPagina2(filtro)
    console.log(filtro)
}

function colocarNaPagina2(filtro) {
    filtro.forEach((despesa, index, array) => {
        let filtradoTipo = despesa.tipo
        let filtradoValor = despesa.valor
        let filtradoDescricao = despesa.descricao
        document.getElementById("filtragem").innerHTML +=
            "<div><p>Valor: <b><i>" + filtradoTipo +
            "</i></b><p>Tipo de despesa: <b><i>" + filtradoValor +
            "</i></b><p>Descrição: <b><i>" + filtradoDescricao + "</i></b></p></div>"
    })
}


