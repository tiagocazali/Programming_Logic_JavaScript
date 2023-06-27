const frm = document.querySelector("form");
const palco = document.querySelector("#divPalco");
const reset = document.querySelector("#btReset");

const poltronas = 240;
let reservadas = [];
let ocupadas= [];

window.addEventListener("load", () => {

    if(localStorage.getItem("teatro_ocupadas")){
        ocupadas = localStorage.getItem("teatro_ocupadas").split(",")
    }
    
    for(let i=1; i<=poltronas; i++){
        
        const figure = document.createElement("figure");
        const imagem = document.createElement("img");
        const descricao = document.createElement("figcaption");

        imagem.src = ocupadas.includes(i.toString()) ? "img/ocupada.jpg" : "img/disponivel.jpg";

        imagem.className = "poltrona";

        const zeros = i<10 ? "00" : i<100 ? "0" : "";
        const num = document.createTextNode(`${zeros}${i}`)
        descricao.appendChild(num);
        
        figure.appendChild(imagem);
        figure.appendChild(descricao);

        if(i%24 == 12){ figure.style.marginRight = "60px"};
        palco.appendChild(figure);
        if(i%24 == 0){ palco.appendChild(document.createElement("br"))}

    }

})

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const escolhida = Number(frm.inPoltrona.value)

    if(escolhida > poltronas || escolhida < 0 || isNaN(escolhida)){
        alert("Escolha uma poltrona entre 1 e 240");
        frm.inPoltrona.value = "" ;
        frm.inPoltrona.focus();
        return;
    }

    if(ocupadas.includes(escolhida.toString())){
        alert('Poltrona já Ocupada. Escolha outra!')
        frm.inPoltrona.value = "" ;
        frm.inPoltrona.focus();
        return;
    }

    if(reservadas.includes(escolhida)){
        alert('Você já reservou essa poltrona!')
        frm.inPoltrona.value = "" ;
        frm.inPoltrona.focus();
        return;
    }

    reservadas.push(escolhida);
    
    let poltronaEscolhida = palco.querySelectorAll("img")[escolhida-1];
    poltronaEscolhida.src = "img/reservada.jpg"

    frm.inPoltrona.value = ""
    frm.inPoltrona.focus()

})

frm.btConfirmarReserva.addEventListener("click", () => {

    let quant = reservadas.length

    let texto = `Finalizar a compra das ${quant} poltronas? \n`
    texto += `Valor por Poltrona: R$ 5,00 \n`
    texto += `Total a pagar R$: ${quant*5}`

    if(confirm(texto)){
        let todasPoltronas = palco.querySelectorAll('img')
        reservadas.forEach(x => {
            ocupadas.push(x);
            todasPoltronas[x-1].src = "img/ocupada.jpg"
        })

        reservadas=[];
        localStorage.setItem("teatro_ocupadas", ocupadas);
    }

    frm.inPoltrona.value = "" ;
    frm.inPoltrona.focus();

})

reset.addEventListener("click", () => {

    if(confirm("Deseja limpar a venda dos ingrssos?")){
        localStorage.removeItem("teatro_ocupadas")
        window.location.reload()
    }

})
