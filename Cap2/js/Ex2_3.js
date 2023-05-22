const frm = document.querySelector("form")
const veiculo = document.querySelector("#outVeiculo")
const valorEntrada = document.querySelector("#outResposta")

addEventListener("submit", (e) => {
    veiculo.innerText = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)
    valorEntrada.innerText = `Entrada de R$ ${((preco)/2).toFixed(2)} + 12x de R$ ${((preco/2)/12).toFixed(2)}`
    e.preventDefault() //impede que a tela recarregue
})