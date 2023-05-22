const frm = document.querySelector("form")
const saida = document.querySelector("pre")

let resposta = ""

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let qunatInicial = frm.inQuantidade.value
    let anos = frm.inAnos.value

    if(qunatInicial < 2){
        alert("Quandidade inicial menor que 2, Não tem como ter cria!")
        frm.inQuantidade.value = ""
        frm.inAnos.value = ""
        frm.inQuantidade.focus()
        return
    }

    
    let aux = qunatInicial
    resposta = `1º ano: ${aux} Chinchilas \n` 

    for(let i=2; i<=anos; i++){
        aux = (aux*3) 
        resposta = resposta + `${i}º ano: ${aux} Chinchilas \n`
    }

    saida.innerText = resposta

})