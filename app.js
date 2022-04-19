const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
    res.send('HOORAH!');
});

app.listen(8000, () => {
    console.log('Server initiated.'.cyan.underline);
});