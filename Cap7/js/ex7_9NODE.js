const prompt = require("prompt-sync")()

const formula = prompt("Digite a Formula: ")
let abre = 0
let fecha = 0

for(const letra of formula){
    if(letra == "("){ //O Erro esta AQUI!
        abre++
    }
    else if(letra == ")"){
        fecha++
        if(fecha>abre){ 
            console.log("Erro na Formula. Fechou Parenteses sem Abrir");
            break;
        }
    }    
}

if(abre != fecha){
    console.log(`ERRO: Tem ${abre} parenteses sem fechar!`)
}
else{ console.log("OK! Formula Valida!")}

console.log(`Abre: ${abre} - Fecha: ${fecha}`)