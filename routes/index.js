var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('esta é a index');
});

router.get('/cadastrar/produto', function(req, res, next) {
  res.send('esta é a pagina para cadastro do produto');
});

router.get('/pesquisar/produto/modelo', function(req, res, next) {
  res.send("Esta é a pagina do modelo do produto");
});

router.get('/contato/sac/produto/', function(req, res, next) {
  res.render("Esta é a pagina de sac do produto");
});

module.exports = router;
