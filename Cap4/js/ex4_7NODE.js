const prompt = require("prompt-sync")()

const pessoas = Number(prompt("Numero de pessoas: "))
const peixes = Number(prompt("Numero de Peixes pescados: "))

const peixeextra = (peixes>pessoas) ? (peixes-pessoas) : 0 

console.log(`Valor Total a pagar:`)
console.log(`Entrada: R$ 20,00/pessoa = ${pessoas*20}`)
console.log(`Peixes extras: R$ 12,00 = Quant: ${peixeextra} - Valor: R$ ${peixeextra*12} `)
console.log(`Total a Pagar: R$ ${(pessoas*20)+(peixeextra*12)}`)