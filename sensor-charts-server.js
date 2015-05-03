var server = require('./server.js');
server.init();

/*
    Socket.IO
*/
var socket;
// サーバーへのアクセスを監視。アクセスがあったらコールバックが実行
server.io.sockets.on('connection', function (s) {
    socket = s;
});

/*
    johnny-five [ Arduino Setting ]
*/
var five = require('johnny-five');
var board = new five.Board();
var sensor;

board.on('ready', function() {
    // アナログ0番ピンを100msごとに取得
    sensor = new five.Sensor({
        pin: 'A0',
        freq: 100
    });

    // センサーを追加(アクセス許可)
    board.repl.inject({
        pot: sensor
    });

    // センサーの入力値を0～100にスケーリングして取得
    sensor.scale(0, 100).on('data', function() {
        var value = this.value;

        // Socket.IOで値を'sensor'というイベント名で送信
        if(socket) socket.emit('sensor', { value: value });
    });
});