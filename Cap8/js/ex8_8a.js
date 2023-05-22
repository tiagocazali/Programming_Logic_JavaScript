const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

const classificar = (idade) => {
    if(idade<=12){return "infantil"}
    else if(idade>12 && idade<18){return "Juvenil"}
    else{return "Adulto"}
}

function retornarTracos(nome){
    let tracos = ""

    for (const letra of nome) {
        if(letra != " "){tracos+= "-"}
        else {tracos += " "}
    }
    return tracos
}


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const idade = frm.inIdade.value

    let texto = nome + "\n" + retornarTracos(nome) + "\n" + "Categoria: " + classificar(idade)

    saidaDados.innerText = texto

})