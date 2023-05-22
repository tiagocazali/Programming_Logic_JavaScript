const prompt = require("prompt-sync")()

const tamanho_arvore = Number(prompt("Qual o Tamanho da Arvore: "))

for(let i=0; i<=tamanho_arvore; i++){

    let ramo = "*".repeat(i*2)
    console.log(ramo.padStart(30+i))
}

for(let i=0; i<=tamanho_arvore/2; i++){
    console.log("**".padStart(31))
}