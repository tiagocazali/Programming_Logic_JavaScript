const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5= document.createElement("h5")
    const texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    dvQuadro.appendChild(h5)

    frm.inTarefa.value = ""
    frm.inTarefa.focus()

})

frm.btSelecionar.addEventListener("click",() => {

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length ==0){ alert("Não há tarefas para selecionar"); return }

    let aux =-1

    for(let i=0; i<tarefas.length; i++){
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"
            aux = i
            break
        }
    }

    if(aux == tarefas.length-1){ aux = -1 }
    
    tarefas[aux +1].className = "tarefa-selecionada"

})

frm.btRetirar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length == 0) { alert("Lista vazia"); return }

    let aux = -1

    tarefas.forEach((essaTarefa,i) => {
        if(essaTarefa.className == "tarefa-selecionada") {aux = i}
    })

    if(aux ==-1) {alert("Selecione uma tarefa para remover"); return}

    if(confirm("Deseja remover a tarefa " + tarefas[aux].innerText)){
        dvQuadro.removeChild(tarefas[aux])
    }

})

frm.btGravar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length ==0) { alert("Não há tarefas para salvar"); return}

    let dados = ""

    tarefas.forEach(cada => {
        dados += cada.innerText + ";"
    })

    localStorage.setItem("tarefas", dados.slice(0,-1))
    if(localStorage.getItem("tarefas")) { alert("Ok! Tarefas Salvas") }
    else{ alert("Erro para salvar no Local Storage - Variavel 'tarefas' não encontrada")}

})

window.addEventListener("load", () => {

    if(localStorage.getItem("tarefas")){
        const dados = localStorage.getItem("tarefas").split(";")
    
        dados.forEach(cada => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(cada)

            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})