const frm = document.querySelector("form")
const saida1 = document.querySelector("#out1")
const saida2 = document.querySelector("#out2")

addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = frm.inPreco.value

    saida1.innerText = `${produto} - Promoção: Leve 3 por R$ ${(preco*2.5).toFixed(2)}`
    saida2.innerText = `A 3ª unidade sai por apenas R$ ${(preco/2).toFixed(2)}`

    e.preventDefault()
})