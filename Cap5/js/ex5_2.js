const frm = document.querySelector("form")
const saida = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = `Entre ${numero} e 1 temos: `

    for(let i = numero; i>1; i--){
        resposta = resposta + i + ", "
    }
    resposta = resposta + "1."
    saida.innerText = resposta

})

