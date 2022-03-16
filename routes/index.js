var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar()
  res.json (autores.rows);
  /res.render('index', { title: 'Express' });/
});

router.get('/inserir', async function(req, res, next) {
  let autor = {
    nome: "Luiza",
    sobrenome: "Silva",
    data_nascimento: "1991-09-01"
  };
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next) {
  let autor = {
    id: "3"
  }
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

module.exports = router;