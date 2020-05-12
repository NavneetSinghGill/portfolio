const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000

const app = express();

// const viewsPath = path.join(__dirname, '..');
// app.set('root', viewsPath)
app.set('views', './views');
// app.set('view engine', 'hbs');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const parentDirectoryPath = path.join(__dirname, '../public')
app.use('/public', express.static(parentDirectoryPath));

// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('<h1>Navneet Singh Gill</h1>');
    // res.render('index');
    // res.sendFile('./src/index.html', { root: viewsPath });
    res.render('mainPage/index.jsx');
});

app.get('/about', (req, res) => {
    res.render('aboutPage/index.jsx');
});

app.get('*', (req, res) => {
    res.send('<h2>Page not found<h2>');
})

app.listen(port, () => {
    console.log("Listening to port "+port);
});


