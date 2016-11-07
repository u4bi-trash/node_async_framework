var async = require('async');
var fs = require('fs');

var myfile_A = './tmp/myfile.txt';
var myfile_B = './tmp/myfile_async.txt';

async.waterfall([boy1,boy2],resultAsync);
/*  waterfall은 흐름제어에 있어서 여러개의 비동기 함수를 순차적으로 실행하되
    앞의 비동기 함수의 결과 값을 뒤의 비동기 함수에 [인자]로 전달함.
*/
function boy1(callback){ fs.readFile(myfile_A,callback);
}
function boy2(data, callback){ fs.writeFile(myfile_B,data,callback);
}

function resultAsync(err){
	if(err) console.log(err);
	console.log('success');
}