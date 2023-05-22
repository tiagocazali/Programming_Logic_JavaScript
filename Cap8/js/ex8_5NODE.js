const prompt = require("prompt-sync")()

const vinhos = [{marca:"Garibald", tipo:"Tinto Suave", preco:15.90},
                {marca:"Contry Wine", tipo:"Branco Suave", preco:16.90},
                {marca:"Jota Pe", tipo:"Tinto Seco", preco:20.90},
                {marca:"sangue de Boi", tipo:"Tinto Suave", preco:14.90},
                {marca:"Chalise", tipo:"Branco Seco", preco:19.90}
]

function titulo(texto){
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

function incluir(){
    titulo("====< Cadastro de Vinho >====")
    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo....: ")
    const preco = Number(prompt("Preço ....: "))

    vinhos.push({marca, tipo, preco})

    console.log("OK! Vinho cadastrado com sucesso!")
}

function listar(){

    if(vinhos.length == 0){
        console.log("Não tem vinhos na lista!")
        return
    }

    titulo("===< Lista dos Vinhos >===")

    console.log("Marca".padEnd(21,".") + "tipo".padEnd(21,".") + "Preço")
    for(const x of vinhos){
        console.log(`${x.marca.padEnd(20)} ${x.tipo.padEnd(20)} ${x.preco.toFixed(2)}`)
    }

}

function pesquisar(){

    titulo("===< Pesquisa de Vinhos >===")
    
    const pesq = prompt("Tipo pesquisado: ")
    
    console.log("Marca".padEnd(21,".") + "tipo".padEnd(21,".") + "Preço")
    
    let contador = 0
    
    for (const x of vinhos) {
        
        if(x.tipo.toUpperCase().includes(pesq.toUpperCase())){
            console.log(`${x.marca.padEnd(20)} ${x.tipo.padEnd(20)} ${x.preco.toFixed(2)}`)
            contador++
        } 
    }
    
    if(contador ==0){ console.log("Não encontamos nenhum vinho!")}
}

function calcularMedia(){

    titulo("===< Media de Preço >===")
    let total = vinhos.reduce((soma, x) => x.preco + soma, 0)
    console.log("A media de preço é: " + (total/vinhos.length).toFixed(2))
    
    
    let ordenado = [...vinhos]
    ordenado.sort((a,b) => a.preco - b.preco)
    console.log("O mais barato custa: " + ordenado[0].preco + " - " + ordenado[0].marca)
    console.log("O mais Caro custa: " + ordenado[ordenado.length-1].preco + " - " + ordenado[ordenado.length-1].marca)
    
    

    //Pode fazer assim tambem, mas é mais bonito o de Cima
    // vinhos.forEach(x => {
    //     media += x.preco //Soma o preço para fazer a média
    // });


}

//Programa Principal
do{
    titulo("===< Cadastro de vinhos >===")
    console.log("1. Inclusçao de Vinho")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por tipo")
    console.log("4. Média e destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if(opcao ==1){
        incluir()
    }
    else if (opcao ==2){
        listar()
    }
    else if(opcao==3){
        pesquisar()
    }
    else if (opcao==4){
        calcularMedia()
    }
    else{
        break
    }

}while(true)