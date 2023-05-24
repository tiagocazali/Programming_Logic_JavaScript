const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    adicionarFilme(titulo, genero)
    gravarLista(titulo, genero)
    
    frm.reset()
    frm.inTitulo.focus()

})


const adicionarFilme = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) //adiciona linha no FINAL na Tabela
    
    const col1 = linha.insertCell(0)    //Coluna 0 - Nome do Filme
    const col2 = linha.insertCell(1)    //coluna 1 - Genero do Filme
    const col3 = linha.insertCell(2)    //coluna 2 - Botão de excluir
    
    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class=exclui title=Excluir>&#10008</i>" //Class exclui esta no CSS
}

function gravarLista(titulo, genero){

    if(localStorage.getItem("listaFilmes")){
        
        //pega as informações do local Storage e já acrescenta as novas, separando com ;
        let tempFilmes = localStorage.getItem("listaFilmes") + ";" + titulo
        let tempGenero = localStorage.getItem("listaGenero") + ";" + genero

        //agora salva de volta a variavel atualizada
        localStorage.setItem("listaFilmes", tempFilmes)
        localStorage.setItem("listaGenero", tempGenero)    
    }

    else{
        //se não existir a variavel ainda, então criamos ela direto
        localStorage.setItem("listaFilmes", titulo)
        localStorage.setItem("listaGenero", genero)
    }

}

tbFilmes.addEventListener("click", (e) => {

    if(e.target.className.includes("exclui")){
        
        const titulo = e.target.parentElement.parentElement.children[0].innerText
        
        if(confirm("Quer mesmo excluir o filme: " + titulo + " ?")){
            e.target.parentElement.parentElement.remove()
            localStorage.clear()    //deleta TODO o local Storage

            //agora cria um NOVO LocalStorage só com a lista de filmes que estão na tabela
            for(let i=1; i<tbFilmes.rows.length; i++){
                let auxFilme = tbFilmes.rows[i].cells[0].innerText      //coluna 0 - Nome do Filme
                let auxGenero = tbFilmes.rows[i].cells[1].innerText     //coluna 1 - Genero do filme

                gravarLista(auxFilme, auxGenero)
            }
        }        
    }
})


window.addEventListener("load", () => {
    if(localStorage.getItem("listaFilmes")){
        
        let filmes = localStorage.getItem("listaFilmes").split(";")
        let genero = localStorage.getItem("listaGenero").split(";")

        for (const i in filmes) {
            adicionarFilme(filmes[i], genero[i])
        }
    }
})