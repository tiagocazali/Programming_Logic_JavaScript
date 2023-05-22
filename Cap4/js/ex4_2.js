const frm = document.querySelector("form")
const resposta = document.querySelector("#resp1")

addEventListener("submit",(e) => {
    const nome = frm.inNome.value
    const altura = frm.inAltura.value
    const masculino = frm.inMasculino.checked //Verifica se foi marcado a opção Masculino no sexo (True ou False)

    if(masculino){
        let peso = 22*(altura*altura)
        resposta.innerText = `${nome}, seu peso ideal é: ${peso}`
    }
    else{
        let peso = 21*(altura*altura)
        resposta.innerText = `${nome}, seu peso ideal é: ${peso}`
    }
    e.preventDefault()
})

addEventListener("reset", () => {
    resposta.innerText = ""
})