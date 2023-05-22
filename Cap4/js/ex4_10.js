const frm = document.querySelector("form")
const resposta = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const numero = frm.inNumero.value

    let aux = (numero%2 == 0) ? "par" : "impar"
    resposta.innerText = `O numero ${numero} é ${aux}`

    // if(numero%2==0){resposta.innerText = `O numero ${numero} é Par`}
    // else{resposta.innerText = `O numero ${numero} é Impar`}
    
})

