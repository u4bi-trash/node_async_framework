var async = require('async');

async.parallel([boy1,boy2,boy3],resultAsync);
/*  동시에 여러개의 task를 실행하는 방법으로 마치 멀티 쓰레드와 같은
    효과를 낼 수 있어 실행 시간을 단축시킬 수 있음
   
    주의할 점 멀티 쓰레드처럼 작업을 수행하는 것뿐.
    실제 멀티 쓰레드가 아님.
   
    parallel 흐름 제어의 문법은 series와 다르지 않음.
    
    단지 내부 수행에 있어서 순차적으로 수행 하는지
    아니면 병렬로 동시에 수행 하는지에 따른 차이만 있음.
   
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