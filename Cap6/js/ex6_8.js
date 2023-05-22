const frm = document.querySelector("form")
const saidaDados = document.querySelector("pre")

let candidatos = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    if(!nome) {alert("Nome inválido."); return}

    const nota = frm.inNota.value
    if(!nota) {alert("Nota inválido."); return}
        
    candidatos.push({nome, nota})
    frm.reset()
    inNome.focus()

    frm.btTodos.dispatchEvent(new Event("click"))
})

frm.btTodos.addEventListener("click", () => {

    let temp = ""

    candidatos.forEach(aluno => {
        temp += aluno.nome.padEnd(20) + " - " + aluno.nota + " acertos\n"
    });

    saidaDados.innerText = temp
})

frm.btAprovados.addEventListener("click", () => {

    const notaCorte = Number(prompt("QUal a nota de Corte: "))

    let aprovados = candidatos.filter(aluno => aluno.nota>=notaCorte)

    aprovados.sort((a,b) => b.nota - a.nota)

    let temp ="Lista de Aprovados com mais de " + notaCorte + " pontos:\n"
    temp += "-".repeat(40) + "\n" 
    for(let a of aprovados){temp += a.nome.padEnd(20) + " - " + a.nota + " acertos\n"}
    
    saidaDados.innerText = temp
})