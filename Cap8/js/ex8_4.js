const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

const pedido= []

frm.btRadioPizza.addEventListener("click", () => {

    frm.btSelectPizza.className = "exibe"
    frm.btSelectBebida.className = "oculta"
})

frm.btRadioBebida.addEventListener("click", () => {

    frm.btSelectBebida.className = "exibe"
    frm.btSelectPizza.className = "oculta"
})

frm.inDetalhes.addEventListener("focus", () => {

    if(frm.btRadioPizza.checked){
        const pizza = frm.btSelectPizza.value
        const num = (pizza=="media") ? 2 : (pizza=="grande") ? 3 : 4 
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm. addEventListener("submit", (e) => {

    e.preventDefault()

    let produto

    if(frm.btRadioPizza.checked){                      //se a oção Pizza estiver marcada
        const num = frm.btSelectPizza.selectedIndex    //Peda o Index do item selecionado
        produto = frm.btSelectPizza.options[num].text  //Pega qual a pizza desse index
    }

    else{   //se não é a pizza que está marcada, então é a bebibda
        const num = frm.btSelectBebida.selectedIndex
        produto = frm.btSelectBebida.options[num].text
    }

    const detalhe = frm.inDetalhes.value

    let aux = produto + " ( " + detalhe + " )"

    pedido.push(aux)  //Adiciona esse item a lista Geral de pedidos

    saidaDados.innerText = pedido.join('\n')

    frm.reset()
    frm.btRadioPizza.dispatchEvent(new Event("click"))

})