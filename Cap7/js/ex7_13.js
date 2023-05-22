const frm = document.querySelector("form")
const saidaDados = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const msg = frm.inTexto.value

    let msgJunta = msg.replace(/ /g,"").toUpperCase()

    let tam = msgJunta.length
    let i=0     //primeiro elemento
    let j=tam-1 //ultimo elemento
    
    while(i<j){
        if(msgJunta.charAt(i)!=msgJunta.charAt(j)){
            saidaDados.innerText = "Essa frase NÃO é um palindromo"
            return;
        }
        j--;
        i++
    }

    saidaDados.innerText = "SIM! Essa frase É um palindromo"

})