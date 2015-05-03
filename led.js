var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	// デジタル13番ピンに100ミリ秒間隔で点滅
	(new five.Led(13)).strobe();
});