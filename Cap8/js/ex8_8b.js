const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

const validarNome = (nome) => {
    let aux = nome.split(" ")
    if(aux.length <= 1){return false}
    else{return true}
}

const obterSobrenome = (nome) => {
    let aux = nome.split(" ")
    return aux[aux.length-1] 
}

function contarVogais(nome){
    let contador = 0
    const vogais = "AEIOU"
    for (let letra of nome) {
        if(vogais.includes(letra.toUpperCase())){
            contador++
        }
    }
    
    return (contador < 10) ? "0"+contador : contador //Se o numero for menor que 10, coloca um zero na frente
}

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value

    if(validarNome(nome)){
        saidaDados.innerText = "Senha: " + contarVogais(nome) + obterSobrenome(nome)
    }
    else{
        saidaDados.innerText = "Inserir o NOME COMPLETO - NOME E SOBRENOME"
    }

})