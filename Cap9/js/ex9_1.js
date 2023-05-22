const frm = document.querySelector("form")
const imgClub = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")

const trocaClube = () => {
    
    let clube //irá receber o nome do clube
    
    if(frm.rbGremio.checked){
        clube = "Gremio"
    }
    else if(frm.rbPelotas.checked){
        clube = "Pelotas"
    }
    else{
        clube = "Farroupilha"
    }
    
    //define as classes de divTitulo: Row e colres do time
    divTitulo.className = `row cores-${clube}`
    
    //Modifica a Imagem do time
    imgClub.src = `img/${clube.toLowerCase()}.png`
    imgClub.className = "img-fluid" //muda o estilo para exibir a imagem
    imgClub.alt = `Simbolo do ${clube}`
    
    localStorage.setItem("clube", clube) //salva no navegador a escolha
}


const verificarClube = () => {
    
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")
        
        if(clube == "Gremio"){ frm.rbGremio.checked = true}
        else if(clube == "Pelotas") { frm.rbPelotas.checked = true}
        else if(clube == "Farroupilha") { frm. rbFarroupilha.checked = true}
        
        trocaClube()
    }
}


frm.rbGremio.addEventListener("change", trocaClube)
frm.rbPelotas.addEventListener("change", trocaClube)
frm.rbFarroupilha.addEventListener("change", trocaClube)


window.addEventListener("load", verificarClube)