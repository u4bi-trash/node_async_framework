var async = require('async');

async.series({one:boy1, two:boy2 },resultAsync);
/*  func1의 timeout이 1초로 func2의 0.5초보다 길지만
    func1이 먼저 출력되고 func2가 출력됨.
*/
function boy1(callback){
    setTimeout(function(){
        console.log('func 1');
        callback(null, 1);
    }, 1000);
}
function boy2(callback){
    setTimeout(function(){
        console.log('func 2');
        callback(null, 2);
    }, 500);
}

function resultAsync(err, results){
	if(err) console.log(err);	
	console.log(results);
}