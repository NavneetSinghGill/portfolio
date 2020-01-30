const express = require('express');

const port = process.env.PORT || 3000

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Navneet Singh Gill</h1>');
});

app.get('*', (req, res) => {
    res.send('<h2>Page not found<h2>');
})

app.listen(port);