const criaTarefa = () => {
    const input = document.querySelector("input")
    const novoItem = input.value
    const select = document.querySelector("select").value

    if (novoItem === "") {
        alert("Insira um item, por favor!")
    } else {
        const listaSegunda = document.getElementById("section-segunda")
        const listaTerca = document.getElementById("section-terca")
        const listaQuarta = document.getElementById("section-quarta")
        const listaQuinta = document.getElementById("section-quinta")
        const listaSexta = document.getElementById("section-sexta")
        const listaSabado = document.getElementById("section-sabado")
        const listaDomingo = document.getElementById("section-domingo")

        if (select === "segunda") {
            listaSegunda.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "terca") {
            listaTerca.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "quarta") {
            listaQuarta.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "quinta") {
            listaQuinta.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "sexta") {
            listaSexta.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "sabado") {
            listaSabado.innerHTML += "<li>" + novoItem + "</li>"
        } else if (select === "domingo") {
            listaDomingo.innerHTML += "<li>" + novoItem + "</li>"
        }
        
        input.value = ""    
        
    }
}

document.getElementsByClassName("conteudo").addEventListener("click", function(){
    this.style.backgroundColor = "red";
  });


const risca = () => {
    const ul = document.querySelector("ul")
    ul.innerHTML = "<ul class='riscado'></ul>"

}