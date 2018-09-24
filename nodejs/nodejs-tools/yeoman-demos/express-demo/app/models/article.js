// Example model


const thinky = require('../../config/thinky');
const r = thinky.r;
const type = thinky.type;

const Article = thinky.createModel('Article', {
  title: String,
  url: String,
  text: String
});

module.exports = Article;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');

