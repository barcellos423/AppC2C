
import express from "express";
import LocaisController from "../controllers/locaisController.js";
//import LivroController from "../controllers/livrosController.js";

import connection from '/Apps/alura-api/src/db.js';

const router = express.Router();

router

.get('/locais/c2co', (req, res) => {
    //res.status(200).send(locaisController.Listarlocais);
    let rows = LocaisController.listarLocais;
    res.render("locais", { model: rows });
   
})

.get('/locais/c2c', (req, res) => {
    //res.status(200).send(locaisController.Listarlocais);

    const sql = "SELECT cd_ativo, vl_movimento FROM gbo1001";
    connection.query(sql, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("locais", { model: rows });
    //res.send(rows);
  })
   
})

.get('/locais/c2cjson', (req, res) => {
    //res.status(200).send(locaisController.Listarlocais);

    const sql = "SELECT cd_ativo, vl_movimento FROM gbo1001";
    connection.query(sql, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    //res.render("locais", { model: rows });
    res.status(200).send(rows);
  })
   
})

/*

  .get("/livros", LivroController.listarLivros)

  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)  */

export default router;  


