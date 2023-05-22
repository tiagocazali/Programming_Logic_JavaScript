const frm = document.querySelector("form")
const saida1 = document.querySelector("#outSaida1")
const saida2 = document.querySelector("#outSaida2")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = frm.inNumero.value

    let divisores = `Divisores do ${numero} : 1`
    let soma = 1

    for(let i=2; i<=(numero/2); i++){

        if(numero%i == 0){
            divisores = divisores + ", " + i
            soma = soma + i
        }
    }

    saida1.innerText = divisores + ` - Soma: ${soma}`
    
    if(soma == numero){saida2.innerText = `${numero} É perfeito.`}
    else{saida2.innerText = `${numero} não é um numero perfeito`}
})