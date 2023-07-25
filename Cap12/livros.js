const express = require("express");
const router = express.Router();
const dbknex = require("./data/db_config");

//get - usado para consulta
router.get("/", async (req, res) => {
    try{
        const livros = await dbKnex("livros").orderBy("id", "desc");
        res.status(200).json(livros);
    }
    catch(error){
        res.status(400).json({msg: error.message});
    }
});

//post - usado para inclusao
router.post("/", async (req, res) => {
    const{ titulo, autor, ano, preco, foto} = req.body;

    if(!titulo || !autor || !ano || !preco || !foto){
        res.status(400).json({msg: "Enviar Titulo, Autor, Ano, Preço e Foto do livro"});
        return;
    }

    try{
        const novo = await dbknex("livros").insert({titulo, autor, ano, preco, foto});
        res.status(201).json({id: novo[0]});
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//put - usado para alteração - Nesse ex, pelo id alteramos o preço do livro
router.put("/:id", async (req,res) => {
    const id = req.params.id;
    const {preco} = req.body;

    try{
        await dbknex("livros").update({preco}).where("id", id);
        res.status(200).json();
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//delete - usado para exclusão
router.delete("/:id", async (req,res) => {
    const {id} = req.params;

    try{
        await dbknex("livros").del().where({id});
        res.status(200).json();
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//------------ Filtro por palavra
router.get("/filtro/:palavra", async (req,res) => {
    const palavra = req.params.palavra;

    try{
        const encontrados = await dbKnex("livros").where("titulo","like", `%${palavra}%`).orWhere("autor", "like", `%${palavra}%`);
        res.status(200).json(encontrados);
        console.log(encontrados, palavra);
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});


module.exports = router;