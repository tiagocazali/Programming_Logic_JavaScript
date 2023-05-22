const frm = document.querySelector("form")
const resposta = document.querySelector("#resposta")

addEventListener("submit", (e) => {
    e.preventDefault()
    let numero = Number(frm.inNumero.value)
    let raiz = Math.sqrt(numero)
    if(Number.isInteger(raiz)){
        resposta.innerText = `A raiz de ${numero} é: ${raiz}`
    }
    else{
        resposta.innerText = `O numero ${numero} não possui raiz exata!`
    }

})