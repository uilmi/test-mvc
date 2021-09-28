const { Article } = require('./models');

Article.create({
    title: 'title binar',
    body: 'binar body binar body',
    approved: 'true'
}).then(user => {
    console.log('user created!')
})

// To create the initial user and password before implementing create new user form