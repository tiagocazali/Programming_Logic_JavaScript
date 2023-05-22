const frm = document.querySelector("form")
const saidaDados = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value

    let separado = nome.split(" ")
    let tamanho = separado.length //ATENÇÃO: Se tem 6 elementos, o ultimo tem Index 5!
    let email = ""

    for(let i=0; i<tamanho-1; i++){
        email += separado[i].charAt(0) 
    }
    email += separado[tamanho-1]+"@tcmCompany.com.br"

    saidaDados.innerText = "Seu -meil sera: " + email.toLowerCase() //separado.join(" * ")

})
