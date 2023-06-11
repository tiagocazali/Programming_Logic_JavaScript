const frm = document.querySelector("form");
const palco = document.querySelector("#divPalco");

const poltronas = 240;
const reservadas = [];
const ocupadas= [];

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