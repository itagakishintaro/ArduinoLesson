# ArduinoLesson

Arduinoの練習

## 構成

1. JavaScriptでLチカ: led.js
2. CdSで光センサーの値を取得: cds.js
3. センサーの値をチャートにする: sensor-charts-server.js, public/sensor-charts.html, public/sensor-charts.js

## 準備

nodeの各種モジュールをインストール

```
npm install
```

## JavaScriptでLチカ

### 回路

http://ics-web.jp/lab/archives/4758

### 実行

```
node led.js
```

## CdSで光センサーの値を取得

参考：http://ics-web.jp/lab/archives/5538

### 使ったもの

Arduino UNO R3
ブレッドボード:1
CdSセル		:1
抵抗(10k)	:1
ジャンパー線	:3

### 回路

5V - CdS - 10k抵抗 - GND
CdS - A0

### 実行

```
node cds.js
```

## センサーの値をチャートにする

Arduinoまわりは「CdSで光センサーの値を取得」と同じ。

参考：http://ics-web.jp/lab/archives/6338

### 実行

サーバー起動

```
node sensor-charts-server.js
```

ブラウザにアクセス

```
http://localhost:3000/sensor-charts.html
```
