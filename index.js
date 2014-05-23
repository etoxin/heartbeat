var express = require('express');
var app = express();
//var app = require('express')(),
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//app.use('/', app.static(__dirname + '/assets'));
//app.use('/js', app(__dirname + '/assets/js'));
//app.use('/css', app.static(__dirname + '/assets/css'));
//app.use(app.static(__dirname + '/assets/js'));

app.use('/css', express.static(__dirname + '/assets/css'));
app.use('/js', express.static(__dirname + '/assets/js'));
app.use('/libs', express.static(__dirname + '/assets/libs'));

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// we create the base template for the heartbeat
var heart = [
    {nid: 1, uid: 'Vacancy'},
    {nid: 2, uid: 'Vacancy'},
    {nid: 3, uid: 'Vacancy'},
    {nid: 4, uid: 'Vacancy'}
];

io.sockets.on('connection', function (socket) {
    socket.emit('heartbeat', heart);
});


