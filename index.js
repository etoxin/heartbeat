var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

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


