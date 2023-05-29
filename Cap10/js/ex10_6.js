const frm = document.querySelector("form")
const areaJogos = document.querySelector("#jogos")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const time = frm.inTime.value

    const h5 = document.createElement("h5")     //Cria um H5
    h5.className ="text-end fst-italic"         //Coloca a Class do CSS BootStrap nesse H5 - Alinhamento a Direita e Italico
    
    const texto = document.createTextNode(time) //Cria um elemento Texto, que recebe o time digitado
    
    h5.appendChild(texto)                       //Coloca o elemento Texto dentro do H5
    areaJogos.appendChild(h5)                   //Coloca o H5 dentro da tag Jogos, no final

    frm.inTime.value = ""
    frm.inTime.focus()

})

frm.btCriarTabela.addEventListener("click", (e) => {

    const h5 = document.querySelectorAll("h5")  //Pega todos os H5 da pagina

    if(h5.length == 0 || h5.length % 2 != 0){
        alert("Numero de times deve ser Par! Adicione mais time!")
        frm.inTime.focus()
        return
    }

    //cria o Titulo que vai em cima da tabela (mas não faz parte dela)
    const temp = document.createElement("h3")
    const texto = document.createTextNode("Tabela dos Jogos")
    temp.appendChild(texto)
    areaJogos.appendChild(temp)

    //Cria a tabela vazia no finla da Tag H5 - Jogos
    const tabela = document.createElement("table")  //Cria a Tabela (ainda sem linhas)
    tabela.className = "table table-striped"        //Coloca o CSS BootStrap nele - Linhas coloridas
    areaJogos.appendChild(tabela)                   //Adiciona a Tabela dentro da Tag Jogos, logo abaixo dos H5 criados acima

    //Pega os valores dos Times adicionados nos H5 acima, e coloca na tabela
    let linha //Cria a variavel "vazia", pois pode ser usada de duas maneiras:

    for(i=0; i<h5.length; i++){                 
        if(i %2 == 0){                          //Uma linha tem 2 times, então se o i for par, ele precisa criar a linha primeiro
            linha = tabela.insertRow(-1)        //Cria a linha
            const col1 = linha.insertCell(0)    //Cria uma coluna para o primeiro time
            col1.textContent = h5[i].innerText  //Pega o texto do i = h5 (time) e coloca nessa celula
        }
        else{                                   //Se o i for impar, ele é o Segundo tima da linha, então não precisa criar a linha
            const col2 = linha.insertCell(1)     //Cria somente uma segunda Célula na linha (linha criada no if de cima)
            col2.textContent = h5[i].innerText
        }
    }

    btCriarTabela.disabled = true //Desativa o botão após a criação da tabela
    btAdicionarTime.disabled = true
    frm.inTime.disabled = true
})

frm.btNovo.addEventListener("click", (e) => {
    
    if(confirm("Criar novas Tabela de Jogos?")) {window.location.reload()}
})