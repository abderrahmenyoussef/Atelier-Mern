const express = require('express');
const articleRoutes = express.Router();
const{apiTest,apiArticleCreate,listeArticles,deleteArticle} = require('../controllers/articleController');

articleRoutes.get('/test', apiTest);
articleRoutes.get('/', listeArticles);
articleRoutes.post('/add', apiArticleCreate);
articleRoutes.delete('/delete', deleteArticle);
module.exports = articleRoutes;