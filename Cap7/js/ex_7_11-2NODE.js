const prompt = require("prompt-sync")()

const parcelas = Number(prompt("Em quantas parcelas: "))

const data = new Date() //pega adata de data no sistema

for(let i=1; i<=parcelas; i++){
    
    data.setMonth(data.getMonth()+1) //Sobe mes a mes, como cada parcela
    
    const aux1 =data.getDate()
    const dia = (aux1 < 10) ? "0"+aux1 : aux1
    
    const aux2 = data.getMonth()+1
    const mes = (aux2<10) ? "0"+aux2 : aux2

    const ano = data.getFullYear()
    
    console.log(`${i}ª Parcela: ${dia}/${mes}/${ano}`)
}