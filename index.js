const express = require('express');
const server = express();
const html = require('./src/data/html.json');
const css = require('./src/data/css.json');
const javascript = require('./src/data/javascript.json');

server.get('/html', (req, res) => {
    return res.json({
        html
    })
})

server.get('/css', (req, res) => {
    return res.json({
        css
    })
})

server.get('/javascript', (req, res) => {
    return res.json({
        javascript
    })
})

server.listen(3000,() => {
    console.log('Servidor está funcionando!')
});
