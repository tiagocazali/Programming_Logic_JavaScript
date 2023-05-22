const prompt = require("prompt-sync")()

const parcelas = Number(prompt("Em quantas parcelas: "))

const hoje = new Date() //pega adata de Hoje no sistema

hoje.setMonth(hoje.getMonth()+1) //O Mes começa em Zero, então para ficar legivel, soma 1

for(let i=1; i<=parcelas; i++){
    hoje.setMonth(hoje.getMonth()+1)
    console.log(`${i}ª Parcela: ${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}`)
}