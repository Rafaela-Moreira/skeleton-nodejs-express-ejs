var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");
const Livro = require ("../models/livro");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar()
  res.json (autores.rows);
  //res.render('index', { title: 'Express' });/
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body.id);
  res.json(autores.rows);
});

//LIVROS

router.get('/selecionarLivro', async function(req, res, next) {
  const livros = await Livro.selecionarLivro()
  res.json(livros.rows);
  /*res.render('index', { title: 'Express' });*/
});

router.post('/inserirLivro', async function(req, res, next) {
  const livros = await Livro.inserirLivro(req.body);
  res.json(livros.rows);
});

router.put('/atualizarLivro', async function(req, res, next) {
  const livros = await Livro.atualizarLivro(req.body);
  res.json(livros.rows);
});

router.delete('/deletarLivro', async function(req, res, next) {
  const livros = await Livro.deletarLivro(req.body.id);
  res.json(livros.rows);
});

router.get('/livros', async function(req, res, next) {
  const livros = await Livro.livrosautor(req.body);
  res.json(livros.rows);
});

module.exports = router;