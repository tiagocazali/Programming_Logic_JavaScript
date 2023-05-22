const prompt = require("prompt-sync")()

const veiculo = prompt("Veiculo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco/2
const parcelas = (preco/2)/12

console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$ ${entrada.toFixed(2)}`)
console.log(`+ 12 parcelas de ${parcelas.toFixed(2)}`)

