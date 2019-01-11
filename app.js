var express = require('express');
fs = require('fs');

var app = express();

var imgs = [
    fs.readFileSync('./a.jpg'),
    fs.readFileSync('./b.jpg'),
];

var current = 0;

app.get('/ysy.jpg', function (req, res) {
    res.setHeader( 'Content-Type', 'image/gif' );
    res.status(200);
    res.send(imgs[current]);
    current = (current + 1) % imgs.length;
    // res.writeHead(200, { 'Content-Type': 'image/gif' });
    // res.end(img, 'binary');
})

app.listen("80")