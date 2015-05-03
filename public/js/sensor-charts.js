(function() {
	var data = [ ['x'], ['sensor'] ];

	$(function() {
		// サーバーに接続
		var socket = io.connect(location.origin);
		var value;

		// サーバーからセンサーの値を受信
		socket.on('sensor', function(dataFromServer) {
			value = dataFromServer.value;
		});

		// 一定間隔でサーバーのセンサーデータを確認してchartを変更

		setInterval(function() {
			data[0].push( new XDate().toString('yyyy-MM-dd hh:mm:ss') );
			data[1].push( value );
			draw();
		}, 1000);
	});

	// http://c3js.org/samples/timeseries.html
	function draw() {
		var chart = c3.generate({
		    data: {
		        x: 'x',
				xFormat: '%Y-%m-%d %H:%M:%S',
		        columns: data
		    },
		    axis: {
		        x: {
		            type: 'timeseries',
		            tick: {
		                format: '%Y-%m-%d %H:%M:%S'
		            }
		        }
		    }
		});
	}
})();