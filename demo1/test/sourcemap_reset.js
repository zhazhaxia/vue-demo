// 读取文件
var fs = require('fs')
// souceMap处理文件
var SourceMapConsumer = require('source-map').SourceMapConsumer

var lineno = 11
var columnno = 11373
start(); 
async function start(){
 	// 构建有map的线上代码
	// node build onlineMap为构建命令
	var mapFile = fs.readFileSync('../dist/build.js.map', 'utf8');
	var consumer = await new SourceMapConsumer(mapFile)

	// console.log('ccc',consumer.originalPositionFor)
	// 输出map的错误信息
	console.log(consumer.originalPositionFor({
		line: +lineno,      // +是为了转化为数字
		column: +columnno
	}))

	consumer.destroy();
 }
