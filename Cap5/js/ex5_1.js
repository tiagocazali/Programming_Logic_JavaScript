const frm = document.querySelector("form")
const saida = document.querySelector("pre") //usa a saida pre ao inves das antigas H2 

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    const numero = Number(frm.inNumero.value)

    let tabuada = "" //cria a variavel de STRING vazia

    for(let i = 1; i<=10; i++){
        // tabuada = `${tabuada + numero} x ${i} = ${numero * i}\n`
        tabuada = tabuada + numero + " x " + i + " = " + (numero*i) + "\n"
    }

    saida.innerText = tabuada
})

