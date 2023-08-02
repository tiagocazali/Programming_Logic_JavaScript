import {useForm} from "react-hook-form";
import { useState } from "react";
import { inAxios } from "../config_axios";

const InclusaoLivros = () => {
    
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState("");
    
    const salvar = async (campos) => {
        try{
            const response = await inAxios.post("livros", campos);
            setAviso(`Ok! Livro cadastrado com o código ${response.data.id}`);
        }
        catch(problem){
            setAviso(`Erro... Livro NAO cadastrado! - MSG: ${problem}`);
        }

        setTimeout(() => {
            setAviso("");
        }, 5000);

        reset({titulo:"", autor:"", foto:"", ano:"", preco:""});
    };

    /* Primeiro exemplo do livro, de como o FRONT-END envia os dados no formato JSON
    const salvar = (campos) => {
        alert(JSON.stringify(campos)); //Converte um objeto JS para uma string JSON
    }
    */

    return(
        <div className="container">
            <h4 className="fst-italic mt-3"> Inclusão </h4>

            <form onSubmit={handleSubmit(salvar)}>
                
                <div className="form-group">
                    <label htmlFor="titulo"> Título: </label>
                    <input type="text" className="form-control" id="titulo" required autoFocus {...register("titulo")} />
                </div>
                
                <div className="form-group mt-2">
                    <label htmlFor="autor"> Autor: </label>
                    <input type="text" className="form-control" id="autor" required {...register("autor")} />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="foto"> URL da foto: </label>
                    <input type="url" className="form-control" id="foto" required {...register("foto")} />
                </div>

                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano"> Ano Publicação: </label>
                            <input type="number" className="form-control" id="ano" required {...register("ano")} />
                        </div>
                    </div>

                    <div className="col-sm8">
                        <div className="form-group">
                            <label htmlFor="preco"> Preço R$: </label>
                            <input type="number" className="form-control" id="preco" step="0.01" required {...register("preco")} />
                        </div>
                    </div>
                </div>

                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="rest" className="btn btn-danger mt-3 ms-3" value="Limpar" />
            </form>

            <div className={aviso.startsWith("Ok!") ? 
                            "alert alert-success" : aviso.startsWith("Erro") ? 
                            "alert alert-danger" : ""}> {aviso} 
            </div>
            
        </div>
    );
};

export default InclusaoLivros;