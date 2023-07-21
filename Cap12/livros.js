const express = require("express");
const router = express.Router();

const dbKnex = require("./data/db_config");

router.get("/", async (req, res) => {
    try{
        const livros = await dbKnex("livros").orderBy("id", "desc");
        res.status(200).json(livros);
    }
    catch(error){
        res.status(400).json({msg: error.message});
    }
});

module.exports = router;