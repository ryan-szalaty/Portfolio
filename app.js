const express = require('express');
require('dotenv').config();
const colors = require('colors');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT, () => {
    console.log('Server initiated.'.cyan.underline);
});