const prompt = require("prompt-sync")()

const valorConta = Number(prompt("Qual o valor da conta R$: "))
const parcelas = Number(prompt("Em quantas parcelas: "))

let valorCheio = Math.floor(valorConta/parcelas) //Gera parcelas de valor redondo, para Baixo
let diferenca = (valorConta-(valorCheio*parcelas)) //Pega a diferença que falta do valor

for(let i=1; i<parcelas; i++){
    console.log(`Valor da ${i}ª parcela: R$ ${valorCheio.toFixed(2)}`)
}

console.log(`Valor da ${parcelas}ª parcela: R$ ${(valorCheio + diferenca).toFixed(2)}`)