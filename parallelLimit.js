var async = require('async');

async.parallelLimit({ one: boy1, two: boy2, three: boy3},2, resultAsync);
/*  parallel과 다른 점은 실행되는 task의 수를 limit를 통해 조절 가능함.
*/

function boy1(callback){
    console.log('function boy1');
    setTimeout(function(){
        callback(null, 'boy1');
    }, 1000);
}
function boy2(callback){
	console.log('function boy2');
    setTimeout(function(){
        callback(null, 'boy2');
    }, 1000);
}
function boy3(callback){
	console.log('function boy3');
    setTimeout(function(){
        callback(null, 'boy3');
    }, 1000);
}
function resultAsync(err, results){
	if(err) console.log(err);	
	console.log(results);
	console.log('boy 1 : '+results.one);
}