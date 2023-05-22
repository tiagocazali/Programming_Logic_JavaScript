const frm = document.querySelector("form")
const saidaDados = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    const mensagem = frm.inTexto.value
    
    let msgCrip = ""

    for(let i=0; i<=mensagem.length; i=i+2){
        msgCrip = msgCrip + mensagem.charAt(i)
    }

    for(let i=1; i<=mensagem.length; i=i+2){
        msgCrip = msgCrip + mensagem.charAt(i)
    }
    
    saidaDados.innerText = msgCrip

})

frm.btDescriptografar.addEventListener("click", () => {

    const msgCrip = frm.inTexto.value
    let msgOriginal = ""

    const tam = msgCrip.length 
    /*   AQUI FUNCIONA BEM, MAS FICOU MUITO GRANDE! CONSEGUI RESUMIR EM 4 LINHAS!!!
         A UNICA COISA QUE MUDA DE PAR PARA IMPAR É ONDE O J VAI FICAR, LOGO SÓ VERIFICAR ISSO!

    //para msg com numero PAR de elementos
    if(tam%2 == 0){
        let j= tam/2
               
        for(let i=0; i<tam/2; i++){
            msgOriginal += msgCrip.charAt(i) + msgCrip.charAt(j)
            j++
        }
    }
    //Para msg com numero IMPAR de elementos
    else{
        let j= Math.floor(tam/2)+1
        
        for(let i=0; i<tam/2; i++){
            msgOriginal += msgCrip.charAt(i) + msgCrip.charAt(j)
            j++
        }

    }
    */

    //Se for PAR, o J fica no meio mesmo. EX: 6/2 = 3
    //Se for IMPAR, o J fica no meio-arredondado para CIMA. EX 5/2 =2.5 = 3
    let j = (tam%2==0) ? tam/2 : Math.ceil(tam/2)
    for(let i=0; i<tam/2; i++){
        msgOriginal += msgCrip.charAt(i) + msgCrip.charAt(j)
        j++
    }

    saidaDados.innerText = msgOriginal
})
