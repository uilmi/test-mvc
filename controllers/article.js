const { Article } = require('../models')

const index = (req, res) => {
    Article.findAll()
        .then(articles => {
            res.render('article/index', { articles })
        })
}

const show = (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    })
        .then(article => {
            res.render('article/show', {
                id: article.id,
                title: article.title,
                body: article.body
            })
        })
        .catch(err => res.status(404).send('Tidak dapat menemukan artikel'))
}

// fungsi 'new' diganti nama ke 'add', karena 'new' adalah keyword yang tidak boleh digunakan dalam penamaan
const add = (req, res) => {
    res.render('article/create')
}

const create = (req, res) => {
    const { title, body } = req.body;
    Article.create({ title, body })
        .then(article => {
            res.redirect(`/article/${article.id}`)
        })
        .catch(err => {
            res.send(`Gagal membuat artikel, karena ${JSON.stringify(err.message, null, 2)}`)
        })
}

module.exports = {
    index,
    show,
    add,
    create
}