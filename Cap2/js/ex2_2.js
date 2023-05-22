//Cria referencia ao formulario
const frm = document.querySelector("form")
const respFilme = document.querySelector("#outTitulo")
const respTempo = document.querySelector("#outTempo")

frm.addEventListener("submit", (e) => {

    const filme = frm.inNomeFilme.value
    const duracao = Number(frm.inTempoFilme.value)

    const hora = Math.floor(duracao/60)
    const minutos = duracao % 60

    respFilme.innerText = filme
    respTempo.innerText = `${hora} horas e ${minutos} minutos.`

    e.preventDefault()

})

