const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

let criancas = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome, idade})

    frm.reset() //limpar os campos do formulário
    frm.inNome.focus()
    frm.btListarTodos.dispatchEvent(new Event("click")) //Faz o clique no botão "Listar Todos"
    
})

frm.btListarTodos.addEventListener("click", () => { 

    if(criancas.length == 0){
        alert("Não ha crianças na lista")
        return
    }

    let temp = ""
    for (const cada_um of criancas) {
        temp += `${cada_um.nome} - ${cada_um.idade} anos\n`
    }

    saidaDados.innerText = temp

})

frm.btResumir.addEventListener("click", () => {

    let ordenado = [...criancas]
    ordenado.sort((a,b) => a.idade - b.idade)

    let aux_idade = ordenado[0].idade
    let aux_nome = []
    let temp = ""
    
    for (const x of ordenado) {
        
        // const {nome, idade} = x //ATENÇÃO - Essa pessoa X, vai ser usada de novo ali embaixo para atualizar a variável

        if(x.idade == aux_idade){
            aux_nome.push(x.nome)
        }

        else{
            temp += aux_idade + " anos: " + aux_nome.length + " criança(s) - " //Mostra a Idade e a quantiade de Crianças dessa idade
            temp += ((aux_nome.length / ordenado.length)*100).toFixed(2) + "%\n" //faz o calculo da %
            temp += "(" + aux_nome.join(", ") + ")\n\n"

            aux_idade = x.idade //Usando a Variavel do FOR ali em cima
            aux_nome = []
            aux_nome.push(x.nome) //Usando a Variavel do FOR ali em cima
        }
    } 
    
    temp += aux_idade + " anos: " + aux_nome.length + " criança(s) - " //Mostra a Idade e a quantiade de Crianças dessa idade
    temp += ((aux_nome.length / ordenado.length)*100).toFixed(2) + "%\n" //faz o calculo da %
    temp += "(" + aux_nome.join(", ") + ")\n\n"

    saidaDados.innerText = temp
})