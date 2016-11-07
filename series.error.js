var async = require('async');

async.series({one:boy1, two:boy2 },resultAsync);
/* func1에 error가 있을 경우 다음 func2는 실행 안됨.
*/
function boy1(callback){ callback('oh, error!', 1);
}
function boy2(callback){ callback(null, 2);
}

function resultAsync(err, results){
	if(err) console.log(err);	
	console.log(results);
}