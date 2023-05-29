const frm = document.querySelector("form")
const areaVelas = document.querySelector("#divVelas")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const idade = frm.inIdade.value //É uma String!

    //para cada numero dessa idade, colocar a vela de numero correspondente
    for(let i in idade){

        const foto = document.createElement("img")
        foto.src = `img/${idade[i]}.jpg`
        foto.alt = `Foto da vela de ${idade[i]}`
        
        areaVelas.appendChild(foto)
    }

    frm.inIdade.disabled = true
    frm.btSubmit.disabled = true

})

//Se clicar em "Novas Velas", recarrega a página
frm.btReset.addEventListener("click",() =>{ 
    location.reload()
})