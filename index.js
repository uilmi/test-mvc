const express = require('express');
const app = express();
// const { PORT = 8000 } = process.env; // Advanced
const PORT = process.env.PORT || 8000;

const LOCALHOST = 'http://localhost';

// ROUTER
const router = require('./router');
app.use(router);


//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Serving -> ${LOCALHOST}:${PORT}`);
})