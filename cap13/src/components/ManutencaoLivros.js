import { useState, useEffect } from "react";
import { inAxios } from "../config_axios";
import { useForm } from "react-hook-form";
import ItemLista from "./ItemLista";

const ManutencaoLivros = () => {
    
    const { register, handleSubmit, reset } = useForm();

    const[livros, setLivros] = useState([]);

    const obterLista = async () => {
        try{
            const lista = await inAxios.get("livros");
            setLivros(lista.data);
        }
        catch (problem){
            alert(`Erro... Não foi possivel obter os dados: ${problem}`);
        }
    };

    const filtrarLista = async(campos) => {
        try{
            const lista = await inAxios.get(`livros/filtro/${campos.palavra}`);
            lista.data.length ? setLivros(lista.data) : alert("Não há livros com essa palavra!");
        }
        catch(problem){
            alert(`Erro... não foi possível obter os dados! - ${problem}`);
        }
    };

    const excluir = async(id, titulo) => {
        if(!window.confirm(`Confirmar a exclusão do livro "${titulo}"?`)) { return; }

        try{
            await inAxios.delete(`livros/${id}`);
            obterLista(); // Altualiza a variavel de Livros e com isso atualiza a tabela mostrada
            //setLivros(livros.filter((livro) => livro.id !== id));   //Também pode fazer assim!!
        }
        catch (problem){
            alert(`Erro... Não foi possivel excluir o livro! - Msg: ${problem}`);
        }

    };

    const alterarPreco = async (id, titulo) => {
        const novoPreco = Number(prompt(`Informe o novo preço do livro (USAR "." como Centavos)"${titulo}": `));

        if(isNaN(novoPreco) || novoPreco === 0) { return; }

        try{
            await inAxios.put(`livros/${id}`, {preco: novoPreco});
            obterLista();
            alert(`Preço Alterado com Sucesso!`);
        }
        catch (problem){
            alert(`Erro para alterar o preço - Erro: ${problem}`);
        }

    };
    
    useEffect( () => {
        obterLista();
    }, []);

    return(
        <div className="container">

            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3"> Manutenção </h4>
                </div>

                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Titulo ou Autor" required {...register("palavra")} ></input>
                            <input type="submit" className="btn btn-primary" value="Pesquisar"></input>
                            <input type="button" className="btn btn-danger" value="Todos" onClick={ () => { reset({palavra: ""}); obterLista(); } }></input>
                        </div>
                    </form>
                </div>

            </div>

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód.</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano</th>
                        <th>Preço</th>
                        <th>Foto</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {livros.map( (cadaLivro) => (
                        <ItemLista key={cadaLivro.id} 
                            id={cadaLivro.id} 
                            titulo={cadaLivro.titulo}
                            autor={cadaLivro.autor} 
                            ano={cadaLivro.ano} 
                            preco={cadaLivro.preco} 
                            foto={cadaLivro.foto} 
                            excluirClick={() => excluir(cadaLivro.id, cadaLivro.titulo)} 
                            alterarClick={() => alterarPreco(cadaLivro.id, cadaLivro.titulo)}
                        />
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default ManutencaoLivros;