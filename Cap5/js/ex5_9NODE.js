const prompt = require("prompt-sync")()

const produto = prompt("Nome do Produto: ")
const etiquetas = Number(prompt("Quantas etiquetas: "))

for(let i=1; i<=etiquetas/2; i++){
    console.log(produto.padEnd(30,"."), produto)
}

if(etiquetas%2 != 0){
    console.log(produto.padEnd(30))
}