const prompt = require("prompt-sync")()

console.log("Digite fim para terminar a entrada de nomes!")

let alunos = []

do{
    let nome = prompt("Nome do Aluno: ")
    if(nome == "fim"){break}
    
    let nota = Number(prompt(`Qual a Nota do Aluno ${nome}: `))
    if(isNaN(nota)){
        console.log("ERRO: Você não digitou uma nota. faça de novo!")    
        continue
    }

    alunos.push({nome, nota})

    console.log("OK! Aluno Cadastrado!")
    
}while(true)

console.log("-".repeat(40))

let maior_nota = alunos.reduce((a,b)=> Math.max(a,b.nota),0)

console.log(`A Maior nota foi ${maior_nota}`)

if(maior_nota >= 7){
    console.log(`Os Alunos que tiraram mais de 7 foram: \n`)

    let destaques = alunos.filter(cada => cada.nota >= 7)
    destaques.forEach(x => {
        console.log(x.nome)
    });
}
else{
    console.log("Não tivemos Destaques nessa turma. Tudos abaixo de 7")
}


