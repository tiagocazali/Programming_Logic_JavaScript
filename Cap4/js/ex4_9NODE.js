const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um numero de 3 digitos: "))

if(numero<100 || numero>1000){ 
    console.log("Esse numero não é de 3 dígitos!")
    return
}

const dig1 = Math.floor(numero/100) //pega so a Centena: 1º numero
let aux = Math.floor(numero%100) //divite por cem para sobrar o restante do numero

const dig2 = Math.floor(aux/10) //pega só a Dezena: 2º Numero
aux = Math.floor(aux%10) //Divide por 10 para ter a unidade.

console.log(`O numero ${numero} invertido fica: ${aux}${dig2}${dig1}`)
