import express from "express";

const app = express();

app.use(express.json())

import connection from '../src/db.js';

app.get('/c2c', (req, res) => {
  const sql = "SELECT cd_ativo, vl_movimento FROM gbo1001";
  connection.query(sql, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send(rows);
     });
}) 


const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobiit"}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
})


function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app