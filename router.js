const router = require('express').Router();
const home = require('./controllers/home');
const article = require('./controllers/article');

router.get('/', home.index);
router.get('/greet', home.greet);
router.get('/articles', article.index);
router.get('/articles/new', article.add);
router.get('/articles/:id', article.show);
router.post('/articles', article.create);

module.exports = router;

