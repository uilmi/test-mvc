const index = (req, res) => {
    res.render('index');
}

const greet = (req, res) => {
    const name = req.query.name;
    res.render('greet', { name });
}

module.exports = {
    index,
    greet
}