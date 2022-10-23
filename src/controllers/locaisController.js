
     //import livros from "../models/Livro.js";

     import connection from '/Apps/alura-api/src/db.js';

     class LocaisController {
     
       static listarLocais = (req, res) => {
        const sql = "SELECT cd_ativo, vl_movimento FROM gbo1001";
        connection.query(sql, [], (err, rows) => {
          if (err) {
            return console.error(err.message);
          }
        })
       }
       static listarLivroPorId = (req, res) => {
         const id = req.params.id;
     
         livros.findById(id, (err, livros) => {
           if(err) {
             res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
           } else {
             res.status(200).send(livros);
           }
         })
       }
     
       static cadastrarLivro = (req, res) => {
         let livro = new livros(req.body);
     
         livro.save((err) => {
     
           if(err) {
             res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
           } else {
             res.status(201).send(livro.toJSON())
           }
         })
       }
     
       static atualizarLivro = (req, res) => {
         const id = req.params.id;
     
         livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
           if(!err) {
             res.status(200).send({message: 'Livro atualizado com sucesso'})
           } else {
             res.status(500).send({message: err.message})
           }
         })
       }
     
       static excluirLivro = (req, res) => {
         const id = req.params.id;
     
         livros.findByIdAndDelete(id, (err) => {
           if(!err){
             res.status(200).send({message: 'Livro removido com sucesso'})
           } else {
             res.status(500).send({message: err.message})
           }
         })
       }
     
     }
     
     export default LocaisController