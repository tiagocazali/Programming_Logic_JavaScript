const frm = document.querySelector("form")
const saque100 = document.querySelector('#outNotas100')
const saque50 = document.querySelector('#outNotas50')
const saque10 = document.querySelector('#outNotas10')

addEventListener("submit",(e) => {
    e.preventDefault()
    const saque = frm.inSaque.value

    if(saque%10 != 0){
        alert("Valor não multiplo de 10. Impossivel saque nesse caixa.")
        frm.inSaque.focus()
        return
    }
    
    const notas100 = Math.floor(saque/100) //Marca quanto será sacado em notas de 100
    let resto = saque%100

    const notas50 = Math.floor(resto/50) //Marca quanto será sacado em notas de 50
    resto = resto%50 //Marco o resto, ou seja, as notas de 10

    const notas10 = (resto/10)

    if(notas100>0) {
        saque100.innerText = `Notas de R$ 100: ${notas100}`}
    
    if(notas50>0) {saque50.innerText = `Notas de R$ 50: ${notas50}`}
    
    if(notas10>0) {saque10.innerText = `Notas de R$ 10: ${notas10}`}
        
})