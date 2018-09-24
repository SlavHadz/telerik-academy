const express = require('express');
const router = express.Router();
const models = require('../models');
const Article = models.Article;

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Article.run().then((articles) => {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
