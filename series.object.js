var async = require('async');

async.series({one:boy1, two:boy2, three:boy3},resultAsync);
/*  함수를 object 전달함. 리절트단에서 가독성이 돋보임.
    @ results.one
*/
function boy1(callback){ callback(null,'boy1');
}
function boy2(callback){ callback(null,'boy2');
}
function boy3(callback){ callback(null,'boy3');
}
function resultAsync(err, results){
	if(err) console.log(err);	
	console.log(results);
	console.log('boy 1 : '+results.one);
}