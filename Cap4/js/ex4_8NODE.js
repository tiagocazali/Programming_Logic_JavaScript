const prompt = require("prompt-sync")()

const valortotal = Number(prompt("Valor Total da compra: "))

const aux = Math.floor(valortotal/20)

const parcelas = (aux==0) ? 1 : aux>6 ? 6 : aux

console.log(`Pode parcelar em até: ${parcelas} parcelas de R$ ${(valortotal/parcelas).toFixed(2)}`)