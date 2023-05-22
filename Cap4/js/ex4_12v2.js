const frm = document.querySelector("form")
const tempo = document.querySelector("#outTempo")
const outTroco = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorPago = frm.inValor.value
    
    if(valorPago < 1){ 
        alert(" Valor insuficiente! (Tem que ser maior que R$ 1,00) ")
        frm.inValor.focus()
        return
    }

    //Declaração das variáveis
    let troco
    let minutos

    //verificação    
    if(valorPago >= 3){
        minutos = 120
        troco = valorPago-3
    }
    else if(valorPago >= 1.75){
        minutos = 90
        troco = valorPago-1.75
    }
    else{
        minutos = 30
        troco = valorPago-1
    }

    //apresentação dos Valores na tela
    tempo.innerText = `Tempo: ${minutos} minutos`
    if(troco>0){outTroco.innerText = `Troco R$: ${troco.toFixed(2)}`}
    
})