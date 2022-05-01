const express = require('express');
require('dotenv').config();
const colors = require('colors');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/download', (req, res) => {
    const file = `${__dirname}/public/files/Resume.pdf`;
    res.download(file);
});

app.listen(process.env.PORT, () => {
    console.log('Server initiated.'.cyan.underline);
});