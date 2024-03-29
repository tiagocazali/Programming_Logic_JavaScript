import "./ItemLista.css";

const ItemLista = (banana) => {

    return(
        <tr>
            <td>{banana.id}</td>
            <td>{banana.titulo}</td>
            <td>{banana.autor}</td>
            <td>{banana.ano}</td>
            <td className="text-end">
                {Number(banana.preco).toLocaleString("pt-br", {minimumFractionDigits:2})}
            </td>
            <td className="text-center">
                <img src={banana.foto} alt="Capa do Livro" width="75"></img>
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={banana.excluirClick}> &#10008; </i>
                <i className="altera text-success fw-bold ms-2" title="Alterar" onClick={banana.alterarClick}> &#36;  </i>
            </td>
        </tr>
    );
};

export default ItemLista;