const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

let listaOriginal = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let modelo = frm.inModelo.value
    let preco = Number(frm.inPreco.value)

    listaOriginal.push({modelo, preco})

    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()

    frm.btListarTodos.dispatchEvent(new Event("click"))
        
})

frm.btListarTodos.addEventListener("click", () => {

    if(listaOriginal.length == 0){
        alert("Lista de carros vazia!")
        return
    }

    let temp = listaOriginal.reduce((acumulador, cada_carro) => 
        acumulador + cada_carro.modelo + " - R$: "+ cada_carro.preco + "\n", "" )

    saidaDados.innerText = 'Lista dos Carros Cadastrados \n' + "-".repeat(40) + '\n' + temp
})

frm.btFiltrar.addEventListener("click", () => {

    const maximo = Number(prompt("Qual o preço máximo desejado R$: "))

    let carros_filtrados = listaOriginal.filter(x => x.preco<=maximo)

    if(carros_filtrados.length ==0){
        alert("Nenhum carro com esse preço foi encontrado")
        return
    }

    let temp = ""

    carros_filtrados.forEach(x => {temp += `${x.modelo} - R$: ${x.preco} \n` })

    saidaDados.innerText = `Lista dos carros com Valor até: R$ ${maximo}\n${"-".repeat(40)}\n${temp}`
})

frm.btPromocao.addEventListener("click", () => {

    const desconto = Number(prompt("Qual o desconto a ser dado: "))

    let carros_com_desconto = listaOriginal.map(x => (
        { modelo: x.modelo, 
          preco: x.preco, 
          preco_desc: x.preco - (x.preco*desconto /100)}
    ))

    let temp = ""

    carros_com_desconto.forEach(carro => {temp += `${carro.modelo} - Preço Original R$: ${carro.preco} - COM desc R$: ${carro.preco_desc}\n` });

    saidaDados.innerText = temp

})