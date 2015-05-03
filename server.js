'use strict';
var http = require('http');
var express = require('express');
// ルーティングファイルを指定
var routes = require('./routes');
var app = express();
var server = http.createServer(app);
// socket.ioの読み込み
var socketIO = require('socket.io');

// 静的ファイルのルートディレクトリを指定
app.use(express.static(__dirname + '/public'));
// ルーティングを設定
routes.configRoutes(app, server);

module.exports = {
	io: socketIO.listen(server),
	init: function() {
		server.listen(3000);
		console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
	}
}