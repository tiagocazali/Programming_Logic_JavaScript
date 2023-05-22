const frm = document.querySelector("form")
const resp = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const condutor = Number(frm.inCondutor.value)
    const permitida = Number(frm.inPermitida.value)
   

    if (condutor<=permitida) {resp.innerText = `Sem Multa`}
    
    else{
        const mais20 = permitida*1.2
        if(condutor>mais20){resp.innerText = "Multa GRAVE"}
        else{resp.innerText = "Multa LEVE"}
        }
       
})