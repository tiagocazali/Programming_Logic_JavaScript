const frm = document.querySelector("form")
const saidaErros = document.querySelector("#outErros")
const saidaChances = document.querySelector("#outChances")
const saidaDica = document.querySelector("#outDica")

const erros = []
let chances = 6
const sorteado = Math.floor(Math.random()*100+1)

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let palpite = frm.inNumero.value
    
    if(palpite==sorteado){
        saidaDica.innerText = "Parabens! Você ganhou!"
        alert("Parabens! Você acertou o Numero!")
        frm.btSubmit.disabled = true
        frm.btNovoJogo.className = "exibe"
        return
    }

    else{
        
        if(erros.includes(palpite)){
            alert("Não sejá Lerdo! Você já disse esse numero!")
            frm.inNumero.value = ""
            frm.inNumero.focus()
        }
        else {
            erros.push(palpite)
            saidaErros.innerText = erros.join(" - ")
            chances = chances-1
            saidaChances.innerText = chances
            
            if(chances == 0){
                alert("GAME OVER!")
                frm.btSubmit.disabled = true
                frm.btNovoJogo.className = "exibe"
                saidaDica.innerText = `O numero secreto era: ${sorteado}`
            }
            
            else {
                let dica = (palpite<sorteado) ? "MAIOR" : "Menor"
                saidaDica.innerText = `Escolha um numero ${dica} que ${palpite}`
                frm.inNumero.value = ""
                frm.inNumero.focus()
            }
        }
    }
})

frm.btNovoJogo.addEventListener("click", () => {
    location.reload()
})