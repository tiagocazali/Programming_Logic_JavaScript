const frm = document.querySelector("form")
const divMoedas = document.querySelector("#divMoedas")

//Quando carregar a página, era novas moedas
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

    //chama a função criarMoedas passando os 4 parametros - uma vez para cada soma de moeda
    criarMoedas(quant1_00, "1_00.jpg", texto_da_img_1_00, "moeda1-00" )
    criarMoedas(quant0_50, "0_50.jpg", texto_da_img_0_50, "moeda0-50" )
    criarMoedas(quant0_25, "0_25.jpg", texto_da_img_0_25, "moeda0-25" )
    criarMoedas(quant0_10, "0_10.jpg", texto_da_img_0_10, "moeda0-10" )
})

//Função para criar e EXIBIR as moedas na tela
function criarMoedas(quant, moeda, textoAlt, classe){

    //cria e EXIBE a quantidade de moedas desejada (quant)
    for(let i=1; i<=quant; i++){

        const novaMoeda = document.createElement("img") //cria elemento IMG
        novaMoeda.src = "img/" + moeda                  //Pega a foto que será usada - "img/1_00.jpg"
        novaMoeda.alt = textoAlt                        //Adiciona o campo de descrição ALT
        novaMoeda.className = classe                    //Adiciona a classa desse elemento    
        divMoedas.appendChild(novaMoeda)                //Coloca essa imagem dentro da Div Moedas
    }

    //depois de criar todas as moedas, adiciona uma quebra de linha
    const br = document.createElement("br")
    divMoedas.appendChild(br)

}

//Função para recarregar a pagina quando clicar em "Novas Moedas"
frm.addEventListener("reset", () => {  
    window.location.reload()
})

//Função para verificar se o palpite do aluno foi correto
frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const palpite = Number(frm.inSoma.value)
    const moedas = document.querySelectorAll("img") //Pega todos os elementos IMG da tela
    let soma = 0  //

    //checa as IMG da tela, olhando suas classes e somando os valores
    for(const essa_moeda of moedas){
        if(essa_moeda.className == "moeda1-00"){soma += 1}
        else if(essa_moeda.className == "moeda0-50"){soma += 0.5}
        else if(essa_moeda.className == "moeda0-25"){soma += 0.25}
        else if(essa_moeda.className == "moeda0-10"){soma += 0.10}
    }
    
    const div = document.createElement("div")
    
    let msg

    //Nova maneira de criar um alert(). Aqui criamos um alert usando o BootStrap
    //Se palpite correto, a janela fica verde ou casso errado, ela é criada vermelha
    if(palpite == soma.toFixed(2)){
        div.className = "alert alert-success"
        msg = "Parabéns! Você acertou o Valor!"
    }
    else {
        div.className = "alert alert-danger"
        msg = `Ops... Você errou. O valor correto era R$ ${soma.toFixed(2)}`
    }
    
    //Aqui é adicionado esse "Alert" em uma nova DIV no final da página
    const texto = document.createTextNode(msg)
    const h3 = document.createElement("h3")
    h3.appendChild(texto)
    div.appendChild(h3)
    divMoedas.appendChild(div)

    //como já foi exibida a resposta, desabilita os campos de entrada e o botão Submit
    frm.inSoma.disabled = true   
    frm.btSubmit.disabled = true

})