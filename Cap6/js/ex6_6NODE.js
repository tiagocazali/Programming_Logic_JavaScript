const prompt = require("prompt-sync")()

console.log("Entre com o nome do Cliente ou FIM para sair")

let clientes = []
do{
    console.log("\n")

    let nome = prompt("Nome do Cliente: ")
    if(nome == "fim") {break}

    let idade = Number(prompt("Idade: "))
    if(isNaN(idade)) {
        console.log("ERRO - Idade Invalida. Faça da novo.")
        continue
    }

    clientes.push({nome, idade})
    
}while(true)

// let preferencial = clientes.filter(x=> (x.idade>=60))

let preferencial =[]
let normal = []

clientes.forEach(cada => {
    if(cada.idade >= 60){preferencial.push(cada)}
    else{normal.push(cada)}
});

console.log("\n")
console.log("Fila Preferencial")
console.log("-".repeat(40))
preferencial.forEach(pessoas => {
    console.log(`- ${pessoas.nome} \n`)
});


console.log("\n")
console.log("-".repeat(40))
console.log("Fila Normal")
for(pessoas of normal){console.log(`- ${pessoas.nome} \n`)}