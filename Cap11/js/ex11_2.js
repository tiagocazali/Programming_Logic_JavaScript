const frm = document.querySelector("form");
const palco = document.querySelector("#divPalco");

const poltronas = 240;
const reservadas = [];
const ocupadas= ['1'];

window.addEventListener("load", () => {

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