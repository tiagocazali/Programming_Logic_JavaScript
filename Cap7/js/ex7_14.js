const frm = document.querySelector("form")
const saidaDados1 = document.querySelector("#out1")
const saidaDados2 = document.querySelector("#out2")


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const data = frm.inData.value
    const valor = frm.inValor.value

    let venc = new Date(data)
    
    venc.setDate(venc.getDate()+90)
    alert(venc)

    let dia = venc.getDate()
    let mes = venc.getMonth()+1
    let ano = venc.getFullYear()
        
    saidaDados1.innerText = "Data Limite para pagamento com desconto: " + dia + "/" + mes + "/" + ano
    
    saidaDados2.innerText = `Valor com desconto: R$ ${(valor*0.8).toFixed(2)}`
    

})