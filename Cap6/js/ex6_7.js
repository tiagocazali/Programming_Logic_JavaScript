const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

const listaClubes = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inClube.value
    if(!nome){ alert("Digite um Nome!"); return }

    listaClubes.push(nome)
    
    frm.reset()
    frm.inClube.focus()

    frm.btListarClubes.dispatchEvent(new Event("click"))
    
})

frm.btListarClubes.addEventListener("click", () => {

    if(listaClubes.length == 0) {alert("Lista Vazia"); return}
    
    let temp = ""
    listaClubes.forEach((time, i) => {
        temp += `${i+1}º time: ${time}\n`
    });

    saidaDados.innerText = temp

})

frm.btExibirTabelas.addEventListener("click", () => {

    if(listaClubes.length == 0 || (listaClubes.length % 2) != 0) {
        alert("Lista Vazia ou com numero IMPAR de times. Adicione um time!")
        inClube.focus()
        return
    }

    let temp = ""
    let tamanho = listaClubes.length
    let ultimo = tamanho-1 //É -1 pois começa em zero! Ex: A lista tem 6 nomes, o ultimo esta no indice 5!

    for(i=0; i<tamanho/2; i++){
        temp += `Jogo ${i+1} = ${listaClubes[i]} x ${listaClubes[ultimo-i]}\n`
    }

    saidaDados.innerText = temp

})