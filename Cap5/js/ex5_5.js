const frm = document.querySelector("form")
const resposta1 = document.querySelector("#out1")
const resposta2 = document.querySelector("#out2")

// Declaração das variaveis GLOBAIS, pos estão fora do corpo do programa
let todasContas = ""
let nunContas = 0 
let valorTotal = 0 

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let descricao = frm.inDescricao.value
    let valor = Number(frm.inValor.value)
    
    todasContas = todasContas + descricao + " - R$: " + valor.toFixed(2) + "\n"
    
    nunContas++   //soma 1 ao contador
    valorTotal += valor  //soma o valor dessa conta ao Valor Total
    
    resposta1.innerText = `${todasContas}-----------------------------`
    resposta2.innerText = `${nunContas} contas pagas - Total Pago: R$ ${valorTotal}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()

})