const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

//variáveis GLOBAL, que serão salvas no Local Storage
let melanciaNome = []
let melanciaPeso = []

frm.addEventListener("submit", (e) => { 

    e.preventDefault()

    const nome = frm.inNome.value
    const peso = frm.inPeso.value
    
    //Testa para saber se o Palpite é único, se for cadastra, se não cancela 
    if(aceitarAposta(peso)){

        melanciaNome.push(nome)
        melanciaPeso.push(peso)
    
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso) //Salva como STRING

        frm.inNome.value = ""
        frm.inPeso.value = ""
        frm.inNome.focus()

        exibirPalpites()

    }

    else{
        alert("Palpite já usado! Escolha outro Palpite!")
        frm.inPeso.value = ""
        frm.inPeso.focus()
    }

})


//Verificar se o Palpite já foi usado - Retorna true(Pode Aceitar) ou false(NÃO pode aceitar)
const aceitarAposta = (numero) => {

    //se a lista vazia, então palpite pode ser aceito = true
    if(melanciaPeso.length == 0){
        return true
    }

    else{
        //se o palpite escolhido já tiver sido usado, alerta e retorna FALSE
        if(melanciaPeso.includes(numero.toString())){
            return false
        }

        //se não foi escolhido ainda, aceita = true
        return true
    }

}


//exibe os Palpites salvos na tela
function exibirPalpites() { 
    
    //Se não tiver palpites na lista
    if(melanciaNome.length == 0){
        saidaDados.innerText = "Lista Vazia - Faça um Palpite"
        return
    }
    
    //se tiver palpites, exite eles
    else{
        let aux = ""
        
        for(let i=0; i<melanciaNome.length; i++){
            aux += melanciaNome[i].padEnd(20) + " - " + melanciaPeso[i] + " gramas \n"
        }

        saidaDados.innerText = aux
    }

}

frm.btVencedor.addEventListener("click", () => {

    if(melanciaNome.length ==0){
        alert("Não tem Palpites!")
        return
    }
    else{
        const pesoCorreto = Number(prompt("Qual o peso Correto da melancia: "))
        if(pesoCorreto<=0 || isNaN(pesoCorreto)){
            alert("Valor Incorreto, Tente novamete.")
            return
        }
        else{
            let vencedorNome = melanciaNome[0]
            let vencedorPeso = Number(melanciaPeso[0])
            let difVencedor = Math.abs(vencedorPeso - pesoCorreto)
            
            for (let i=1; i<melanciaPeso.length; i++) {
                difAtual = Math.abs(Number(melanciaPeso[i]) - pesoCorreto)
                if(difVencedor>difAtual){
                    vencedorNome = melanciaNome[i]
                    vencedorPeso = Number(melanciaPeso[i])
                    difVencedor = difAtual
                } 
            }

            //Agora que achou quem ficou mais perto do valor, mostra o Ganhador
            let msg = "Resultado -  Peso correto: " + pesoCorreto + " gramas \n"
            msg += "-".repeat(30) + "\n"
            msg += "Ganhador: " + vencedorNome
            msg += "\nPalpite: " + vencedorPeso
            msg += "\nDiferença de peso: " + difVencedor

            alert(msg)

            //faz um clic no botão Limpar, para começar de novo
            frm.btLimpar.dispatchEvent(new Event("click"))

        }
        
    }

})


//Função do Botão Limpar Palpites
frm.btLimpar.addEventListener("click", () => {
    
    if(confirm("Quer mesmo apagar as Apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        melanciaNome=[]
        melanciaPeso=[]
    }
    
    exibirPalpites()
})


//Verificar o Local Storage e atualizar as variáveis do programa com elas
function checkLocalStorage(){

    if(localStorage.getItem("melanciaNome")){
        melanciaNome = localStorage.getItem("melanciaNome").split(",")
        melanciaPeso = localStorage.getItem("melanciaPeso").split(",")
    }
    exibirPalpites()
}

//sempre que a tela for carregada, checa o Local Storage
window.addEventListener("load", checkLocalStorage)