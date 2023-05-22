const frm = document.querySelector("form")
const outMedia = document.querySelector("#out1")
const outSituacao = document.querySelector("#out2")

frm.addEventListener("submit", (e) => {
    
    const nome = frm.inNome.value
    const n1 = Number(frm.inNota1.value)
    const n2 = Number(frm.inNota2.value)
    
    const media = (n1+n2)/2
    outMedia.innerText = `Média das notas é: ${media}`
    
    if(media >= 7){
        outSituacao.innerText = `Parabéns ${nome}, Você foi APROVADO(A)`
        outSituacao.style.color = "blue"
    }
    else if(media >=4){
        outSituacao.innerText = `Atenção: ${nome}, Você está de EXAME!`
        outSituacao.style.color = "yellow"
    }
    else{
        outSituacao.innerText = `Opss..  ${nome}, Você foi REPROVADO(A)`
        outSituacao.style.color = "red"
    }
    
    e.preventDefault()
})