const frm = document.querySelector("form")
const areaApostasAtual = document.querySelector("#outApostaAtual")
const areaListaCavalos = document.querySelector("#outListaCavalos")
const areaPrincipal = document.querySelector("#outPrincipal")

//por enquanto a lista de cavalos esta fixa. Mas vai ser dinamica depois
const listaCavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Luck"];
const apostas = [{cavalo:0, valor:100},{cavalo:1, valor:200},{cavalo:2, valor:300},
                 {cavalo:3, valor:400},{cavalo:4, valor:500},{cavalo:5, valor:600},
                 {cavalo:1, valor:150},{cavalo:3, valor:160},{cavalo:5, valor:170}];


function mostrarCavalos() {

    let aux = "Lista Atual dos Cavalos:\n" + "-".repeat(25) + "\n"
    
    listaCavalos.forEach((nome,i) => {
        aux += `${i+1}º Cavalo: ${nome}\n`
    });

    areaListaCavalos.innerText = aux;
}

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const cavalo = Number(frm.inNumeroCavalo.value)-1  //OBS: Subtrai 1 do valor pois no vetor a contagem começa em zero
    const valor = Number(frm.inAposta.value)

    apostas.push({cavalo, valor}) 
    mostrarApostas()

    frm.inNumeroCavalo.value = ""
    frm.inAposta.value = ""

    //Passa o numero do cavalo e recebe 2 respostas
    let [quant, soma] = totalizarUmCavalo(cavalo)

    let aux = `O cavalo ${cavalo+1} teve ${quant} apostas = Total R$ ${soma}`;
    areaApostasAtual.innerText = aux;

})

//Quando digita o nº de um cavalo e SAI DO CAMPO, totaliza as aposta desse cavalo
frm.inNumeroCavalo.addEventListener("blur", () => {
    
    if(frm.inNumeroCavalo.value == ""){ 
        areaApostasAtual.innerText = ""; 
        return;
    }

    let numero = (frm.inNumeroCavalo.value)-1
    let contador = 0
    let soma = 0

    apostas.forEach(cada => {
        if(cada.cavalo == numero){
            contador++;
            soma += cada.valor
        }
    })

    let aux = `O cavalo ${numero+1} teve ${contador} apostas = Total R$ ${soma}`;
    areaApostasAtual.innerText = aux

})

//Quando o foco VOLTA para o campo de entrada, limpa a area de resumo de aposta
frm.inNumeroCavalo.addEventListener("focus", () => {
    areaApostasAtual.innerText = ""
    mostrarApostas()
})

function totalizarUmCavalo(numero){
    let contador = 0
    let soma = 0

    apostas.forEach(cada => {
        if(cada.cavalo == numero){
            contador++;
            soma += cada.valor
        }
    })

    return [contador, soma]
} 

function mostrarApostas() {

    let aux = "Apostas Realizadas\n" + "-".repeat(30) + "\n"

    for(let x of apostas){
        aux += `Cavalo Nº ${x.cavalo+1} ${listaCavalos[x.cavalo]} - Valor R$: ${x.valor}\n`
    }
    areaPrincipal.innerText = aux;
}

//FUnção do Botão RESUMO
frm.btResumo.addEventListener("click", () => {

    if(apostas.length == 0){
        alert("Não há apostas para Resumir");
        return;
    }

    aux = `Nº Cavalo........Nº Apostas........ R$ Apostado\n${"-".repeat(50)}\n`
    
    //Pega o Array de Cavalos e vai indice por indice usando a função "totalizarUmCavalo" para pegar qunt e valor
    for (let cavalo in listaCavalos) {
        let[quant, soma] = totalizarUmCavalo(cavalo)

        aux += `${Number(cavalo)+1} - ${listaCavalos[cavalo].padEnd(15)} ${quant} ${soma.toFixed(2).padStart(20)}\n`
    }

    areaPrincipal.innerText = aux

})

frm.btGanhador.addEventListener("click", () => {

    const ganhador = Number(prompt("Qual o Numero do Cavalo Ganhador: "))
    
    if(isNaN(ganhador) || ganhador == 0 || ganhador > listaCavalos.length){
        alert("Cavalo Invalido.");
        return;
    }

    //Somar o TOTAL apostado
    const total = apostas.reduce((acumulador, cadaAposta) => acumulador += cadaAposta.valor, 0)
    
    //Chama função "totalizarUmCavalo" que devolve Quantidade de Aposta e a Soma delas
    const[apostaNoGanhador, somaGanhador] = totalizarUmCavalo(ganhador-1)

    let aux = "Resumo Final da Corrida\n"
    aux += "-".repeat(40) + "\n"
    aux += `Numero Total de Apostas:         ${apostas.length}\n`
    aux += `Total Apostado R$:              ${total.toFixed(2)}\n`
    aux += "\nGanhador: Nº" + ganhador + " - " + listaCavalos[ganhador-1]
    aux += "\n\nNº de Apostas: " + apostaNoGanhador
    aux += "\nValor apostado R$: " + somaGanhador.toFixed(2)
    aux += "\nPremio final de cada apostador R$: " + (total/apostaNoGanhador).toFixed(2)    

    areaPrincipal.innerText = aux

})

window.addEventListener("load", () => {
    if(listaCavalos.length != 0){mostrarCavalos();}
    if(apostas.length != 0){ mostrarApostas(); }
});

