const express = require("express");
const router = express.Router();
const dbknex = require("./data/db_config");

//get - Consulta do bd Completo
router.get("/", async (req, res) => {
    try{
        const livros = await dbknex("livros").orderBy("id", "desc");
        res.status(200).json(livros);
    }
    catch(error){
        res.status(400).json({msg: error.message});
    }
});

//post - Inclusão de novo Livro
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

//put - Alteração de Preço - pelo id alteramos o preço do livro
router.put("/:id", async (req,res) => {
    const id = req.params.id;
    const preco = req.params.preco;

    try{
        await dbknex("livros").update({preco}).where("id", id);
        res.status(200).json();
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//delete - Exclusão de um livro - pelo id
router.delete("/:id", async (req,res) => {
    const id = req.params.id;

    try{
        await dbknex("livros").del().where({id});
        res.status(200).json();
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//------------ Filtro por palavra chave em Livro e autor
router.get("/filtro/:palavra", async (req,res) => {
    const palavra = req.params.palavra;

    try{
        const encontrados = await dbknex("livros")
                            .where("titulo","like", `%${palavra}%`)
                            .orWhere("autor", "like", `%${palavra}%`);

        res.status(200).json(encontrados);
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//----------- Consulda de dados estatísticos básicos do banco
router.get("/dados/resumo", async (req,res) => {
    try{
        const consulta = await dbknex("livros")
                            .count({num: "*"})
                            .sum({soma: "preco"})
                            .max({maior: "preco"})
                            .avg({media: "preco"});
        
        //const {num, soma, maior, media} = consulta[0];
        //res.status(200).json({num, soma, maior, media:Number(media.toFixed(2)) });
        res.json(consulta);
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});

//---------- Soma dos preços agrupados por ANO
router.get("/dados/grafico", async (req,res) => {
    try{
        const totalPorAno = await dbknex("livros")
                            .select("ano")
                            .sum({total: "preco"})
                            .groupBy("ano");
        
        res.status(200).json(totalPorAno);
    }
    catch(problem){
        res.status(400).json({msg: problem.message});
    }
});


module.exports = router;