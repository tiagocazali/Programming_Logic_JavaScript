const frm = document.querySelector("form")
const saida1 = document.querySelector("#out1")
const saida2 = document.querySelector("#out2")
const pconvenio = document.querySelector("#escolhaConvenio")

//Pode criar a função assim tambem!
//const calcularDesc = (valor, taxa) =>  valor *(taxa/100) 

function calcularDesc(valor, taxa){
    return valor*(taxa/100)
}

frm.btRadioSim.addEventListener("click", () => {
    pconvenio.className = "exibe"
})

frm.btRadioNao.addEventListener("click", () => {
    pconvenio.className = "oculta"
})

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const valor = frm.inValor.value
    let desc = 0
    
    if(btRadioSim.checked){
        
        if(frm.btSelectConvenio.value == "amigo"){
           desc = calcularDesc(valor, 20)
        }
        else{
            desc = calcularDesc(valor, 50) 
        }
    }
    else{
        desc = calcularDesc(valor,10)
    }

    saida1.innerText = `Desconto de R$ ${desc.toFixed(2)}`
    saida2.innerText = "A pagar R$: " + (valor-desc).toFixed(2)

})
