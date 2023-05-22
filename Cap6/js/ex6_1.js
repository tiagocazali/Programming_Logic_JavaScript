const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let nome = frm.inPaciente.value
    pacientes.push(nome)

    let temp = ""

    pacientes.forEach((x,i)=>{
        temp = temp + `${i+1}. ${x} \n`
    })

    respLista.innerText = temp
    frm.inPaciente.value = ""
    frm.inPaciente.focus()

})

frm.btUrgencia.addEventListener("click", () => {
    
    //Primeiro testa para saber se o nome foi digitado, se NÂO foi, aparece msg.
    if(!frm.checkValidity()){
        alert("Informe o Nome do Paciente de Urgencia")
        frm.inPaciente.focus()
        return
    }

    //adiciona o Paciente como o PRIMEIRO da FIla - URGENTE
    let nome = frm.inPaciente.value
    pacientes.unshift(nome)

    //Atualiza a lista de pacientes para exibição
    let aux = ""
    pacientes.forEach((x,i) => (aux += `${i+1}. ${x} \n`))

    //Exibe a nova lista na tela e limpa os campos
    respLista.innerText = aux
    frm.inPaciente.value = ""
    frm.inPaciente.focus()

})

frm.btAtender.addEventListener("click", () => {

    //Primeiro verifica se tem pacientes para ser atendido
    if(pacientes.length ==0){
        alert("Não há ninguem para ser atendido!")
        respNome.innerText = ""
        frm.inPaciente.focus()
        return
    }

    //Pega a proxima pessoa a ser atendida e mostra no Painel
    let chamar = pacientes.shift()
    respNome.innerText = chamar

    //Atualiza a lista de Pacientes
    let temp = ""
    pacientes.forEach((x,i) => (temp += `${i+1}. ${x} \n`))
    respLista.innerText = temp
    frm.inPaciente.focus()
})