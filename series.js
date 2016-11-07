var async = require('async');

async.series([boy1,boy2,boy3],resultAsync);
/*  series 흐름은 서로 데이타에 대한 의존성은 없지만
    순차적으로 실행이 되어야 하는 경우등에 활용 될 수 있음.
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
	console.log('boy 1 : '+results[0]);
}