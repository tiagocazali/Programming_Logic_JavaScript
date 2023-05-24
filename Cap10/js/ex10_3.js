const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    adicionarFilme(titulo, genero)

    
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
    col3.innerHTML = "<i class=`excluir` title=`Excluir`>&#10008</i>"
}

function gravarLista(titulo, genero){



}
