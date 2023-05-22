const frm = document.querySelector("form")

const taxa_multa = 2/100     //Multa de 2%
const taxa_jurus = 0.33/100  //Jurus de 0,33% ao Dia

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const dataVenc = frm.inData.value  //A data digitada vem no formato AAAA/MM/DD
    const valor = Number(frm.inValor.value)
    const vencimento = new Date() //recebera a datavenc no formato de Objeto DATE
    const hoje = new Date()

    //pega a entrada da Data digitada, separa o Dia Mes e Ano e cria a variável vencimento no formaro DATE
    let partesVencimento = dataVenc.split("-") //Separa a data em um vetor ANO / MES / DIA
    vencimento.setDate(Number(partesVencimento[2])) //Coloca o DIA
    vencimento.setMonth(Number(partesVencimento[1])-1) //Coloca o Mes - Lembre-se que o JavaScrit usa mes começando com 0, por isso -1
    vencimento.setFullYear(Number(partesVencimento[0])) //Coloca o ANO

    
    //agora que já tem o vencimento no formato certo, pode comparar as datas
    let atraso = hoje - vencimento //O objeto DATE no JavaScript é um NUMERO, de Milissegundos des jan 1970 - NÃO UMA DATA
    let multa = 0
    let juros = 0

    if(atraso > 0){
        
        //se o Boleto esta atrasado, atualiza a Multa e o Juros
        const diasAtraso = atraso/86400000 //Esse numero é a quantidade de milissegundos que 1 dia tem.
        juros = valor * taxa_jurus * diasAtraso  
        multa = valor * taxa_multa
    }

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = (valor + multa + juros).toFixed(2)


})