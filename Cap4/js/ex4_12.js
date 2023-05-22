const frm = document.querySelector("form")
const tempo = document.querySelector("#outTempo")
const troco = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorPago = Number(frm.inValor.value)

    if(valorPago < 1){tempo.innerText = "Valor Insuficiente! Coloque mais moedas!"}

    if(valorPago >= 1.00 && valorPago <= 1.74) {
        tempo.innerText = "Tempo: 30 min"
        let valorTroco = (valorPago-1 > 0) ? (valorPago-1) : 0
        troco.innerText = `Troco R$: ${valorTroco.toFixed(2)}` 
    }
    
    if(valorPago >= 1.75 && valorPago <= 2.99) {
        tempo.innerText = "Tempo: 60 min"
        let valorTroco = (valorPago-1.75 > 0) ? (valorPago-1.75) : 0
        troco.innerText = `Troco R$: ${valorTroco.toFixed(2)}` 
    }

    if(valorPago >= 3){
        tempo.innerText = "Tempo: 120 min"
        let valorTroco = (valorPago-3 > 0) ? (valorPago-3) : 0
        troco.innerText = `Troco R$: ${valorTroco.toFixed(2)}`
    }
    
   
})