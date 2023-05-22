const prompt = require("prompt-sync")()

const salario = Number(prompt("Salario Atual: R$ "))
const tempo = Number(prompt("Tempo de serviço (em anos)"))

const aux = Math.floor(tempo/4)
const acrescimo = salario * (aux/100)

console.log(`Foram ${aux} Quadienios de trabalho`)
console.log(`Salario a receber: R$ ${(salario+acrescimo).toFixed(2)}`)