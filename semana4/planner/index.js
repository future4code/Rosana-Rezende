let segunda = document.querySelector("#section-segunda>ul")
let terca = document.querySelector("#section-terca>ul")
let quarta = document.querySelector("#section-quarta>ul")
let quinta = document.querySelector("#section-quinta>ul")
let sexta = document.querySelector("#section-sexta>ul")
let sabado = document.querySelector("#section-sabado>ul")
let domingo = document.querySelector("#section-domingo>ul")

const criaTarefa = () => {
    const input = document.querySelector("input")
    const novoItem = input.value    
    const select = document.querySelector("select").value

    if (novoItem === "") {
        alert("Insira um item, por favor!")
    } else {
        // const listaSegunda = document.getElementById("section-segunda")
        // const listaTerca = document.getElementById("section-terca")
        // const listaQuarta = document.getElementById("section-quarta")
        // const listaQuinta = document.getElementById("section-quinta")
        // const listaSexta = document.getElementById("section-sexta")
        // const listaSabado = document.getElementById("section-sabado")
        // const listaDomingo = document.getElementById("section-domingo")

        // if (select === "segunda") {
        //     listaSegunda.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "terca") {
        //     listaTerca.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "quarta") {
        //     listaQuarta.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "quinta") {
        //     listaQuinta.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "sexta") {
        //     listaSexta.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "sabado") {
        //     listaSabado.innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "domingo") {
        //     listaDomingo.innerHTML += "<li>" + novoItem + "</li>"
        // }

        //-------------------simplificando, sem criar variável antes
        // if (select === "segunda") {
        //     document.getElementById("section-segunda").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "terca") {
        //     document.getElementById("section-terca").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "quarta") {
        //     document.getElementById("section-quarta").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "quinta") {
        //     document.getElementById("section-quinta").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "sexta") {
        //     document.getElementById("section-sexta").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "sabado") {
        //     document.getElementById("section-sabado").innerHTML += "<li>" + novoItem + "</li>"
        // } else if (select === "domingo") {
        //     document.getElementById("section-domingo").innerHTML += "<li>" + novoItem + "</li>"
        // }

        // -----------------simplificando +, com switch case
        
        switch (select) {
            case "segunda":
                segunda.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "terca":
                terca.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "quarta":
                quarta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "quinta":
                quinta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "sexta":
                sexta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "sabado":
                sabado.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "domingo":
                domingo.innerHTML += "<li>" + novoItem + "</li>"
                break;
        }

        input.value = ""

    }
}

const apagaTudo = () => {
    segunda.innerHTML = ""
    terca.innerHTML = ""
    quarta.innerHTML = ""
    quinta.innerHTML = ""
    sexta.innerHTML = ""
    sabado.innerHTML = ""
    domingo.innerHTML = ""    
}




// function risca() {
//     event.target.style = "text-decoration:line-through"
// }

// document.querySelector("#section-segunda>ul").setAttribute("onclick", risca())

// document.querySelector("li").addEventListener('click', risca());

// // segunda.innerHTML.setAttribute("onclick", risca())
