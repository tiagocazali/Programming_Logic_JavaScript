const frm = document.querySelector("form")
const saida = document.querySelector("#outSaida")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const numero = frm.inNumero.value
    const nome = frm.inNome.value
    let resposta = `${nome}`

    for(let i=1; i<=numero; i++){

        resposta = resposta + " * " + nome
    }

    saida.innerText = resposta

})