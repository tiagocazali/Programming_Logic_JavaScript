const frm = document.querySelector("form")
const divMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {

    //Gera numeros aleatórios de 1 a 5
    const quant1_00 = Math.ceil(Math.random() *5)
    const quant0_50 = Math.ceil(Math.random() *5)
    const quant0_25 = Math.ceil(Math.random() *5)
    const quant0_10 = Math.ceil(Math.random() *5)

    const texto_da_img_1_00 = "Moeda de 1 real"
    const texto_da_img_0_50 = "Moeda de 50 centavos"
    const texto_da_img_0_25 = "Moeda de 25 centavos"
    const texto_da_img_0_10 = "Moeda de 10 centavos"

    criarMoedas(quant1_00, "1_00.jpg", texto_da_img_1_00, "moeda1-00" )
    criarMoedas(quant0_50, "0_50.jpg", texto_da_img_0_50, "moeda0-50" )
    criarMoedas(quant0_25, "0_25.jpg", texto_da_img_0_25, "moeda0-25" )
    criarMoedas(quant0_10, "0_10.jpg", texto_da_img_0_10, "moeda0-10" )
})

function criarMoedas(quant, moeda, textoAlt, classe){

    //para cada "Valor de moeda" que receber, faz a criação delas
    for(let i=1; i<=quant; i++){

        const novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda
        novaMoeda.alt = textoAlt
        novaMoeda.className = classe
        divMoedas.appendChild(novaMoeda)
    }

    //depois de criar todas as moedas, adiciona uma quebra de linha
    const br = document.createElement("br")
    divMoedas.appendChild(br)

}

frm.addEventListener("reset", () => {  
    window.location.reload()
})

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    

})