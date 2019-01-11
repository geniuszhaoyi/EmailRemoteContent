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
    console.log('Someone visited the image. Served image #' + current);
    // current = (current + 1) % imgs.length;
    // res.writeHead(200, { 'Content-Type': 'image/gif' });
    // res.end(img, 'binary');
});

app.get('/set/:current', function(req, res) {
    current = req.params.current
    res.send('ok');
})

var port = process.env.PORT || 80

app.listen(port, function() {
    console.log('listening on ' + port);
})