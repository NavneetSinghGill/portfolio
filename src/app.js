const express = require('express');
const path = require('path');
const databaseInterface = require('./Files/databaseInterface');
const CONSTANTS = require('./Files/Constants');

const port = process.env.PORT || 3000

if(process.argv[2] == "production") {
    CONSTANTS.ISLOCALENVIRONMENT = false;
} else {
    CONSTANTS.ISLOCALENVIRONMENT = true;
}

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

app.use((req, res, next) => {
    console.log(req.ip);
    databaseInterface.saveIP(req.ip);
    next();
})

app.get('/', (req, res) => {
    // res.send('<h1>Navneet Singh Gill</h1>');
    // res.render('index');
    // res.sendFile('./src/index.html', { root: viewsPath });
    res.render('mainPage/index.jsx');
});

app.get('/about', (req, res) => {
    res.render('aboutPage/index.jsx');
});

app.get('/resume', (req, res) => {
    res.sendFile('./Resume.pdf', { root: __dirname });
});

app.get('*', (req, res) => {
    res.send('<h2>Page not found<h2>');
})

app.listen(port, () => {
    console.log("Listening to port "+port);
});


