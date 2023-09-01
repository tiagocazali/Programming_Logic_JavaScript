import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { inAxios } from "../config_axios";

const ResumoLivros = () => {
    
    const [resumo, setResumo] = useState([]);
    const [grafico, setGrafico] = useState([]);
   

    const obterDados = async () => {
        
        try{
            const dadosResumo = await inAxios.get("livros/dados/resumo");
            setResumo(dadosResumo.data);
                        
            const dadosGrafico = await inAxios.get("livros/dados/grafico");
            
            const arrayGrafico = [["Ano", "R$ Total"]];  //Criei um Array e coloquei na primeira linha os Titulos
            dadosGrafico.data.map( (x) => arrayGrafico.push( [x.ano.toString(), x.total] ) );
            setGrafico(arrayGrafico);
        }
        catch (problem){
            alert(`Erro para obter os dados!- erro: ${problem}`);
        };
    };

    useEffect( () => {
        obterDados();
    },[]);

    return(
        
        
        <div className="container">
            <h4 className="mt-3"> Resumo </h4> 
            
            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger"> {resumo.num} </p>
                <p> Nº de Livros Cadastrados</p>
            </span>

            <span className="btn btn-outline-primary btn-lg mx-2">
                <p className="badge bg-danger"> { Number(resumo.soma).toLocaleString("pt-br", {minimumFractionDigits:2} ) } </p>
                <p>Total Investido em Livros</p>
            </span>

            <span className="btn btn-outline-primary btn-lg me-2">
                <p className="badge bg-danger"> { Number(resumo.maior).toLocaleString("pt-br", {minimumFractionDigits:2} ) } </p>
                <p>Maior Preço Cadastrado</p>
            </span>

            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger"> { Number(resumo.media).toLocaleString("pt-br", {minimumFractionDigits: 2})} </p>
                <p>Preço Médio dos Livros</p>
            </span>

            <div className="d-flex justify-content-center">
                < Chart
                    width={800}
                    height={420}
                    chartType="ColumnChart"
                    loader={<div>Carregando Gráfico...</div>}
                    data={grafico}
                    options={{
                        title: "Total de Investimento em Livros - por Ano de Publicação",
                        chartArea: { width: "85%"},
                        hAxis: {title: "Ano de Publicação"},
                        vAxis: {title: "Preço Acumulado R$"},
                        legend: {position: "none"},
                    }} 
                />
            </div>

        </div>
    );

};

export default ResumoLivros;