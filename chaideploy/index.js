console.log("Chai aurr Code");

const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at Chai aur Code</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});