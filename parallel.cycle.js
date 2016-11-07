var async = require('async');

// 전역변수 카운터임
var i = 0;

// task로 사용할 함수임
var delayCheck = function(callback){
    ++i;
    // 2의 배수일 경우 1초 후 callback 호출함
    if (i%2===0) {
        console.log('2의 배수임 : '+i);
        setTimeout(function(){ callback(null, i); return;
        }, 1000);
    }
    else { // 2의 배수가 아닐 경우 즉시 callback 호출함
        console.log('2의 배수아님 : '+i);
        callback(null, i);
    }
};

// 할당할 tasks 세팅함.
var tasks = {};
for (var j=0; j<5; j++) {
    tasks['boy'+j] = delayCheck;
}

async.parallel(tasks,resultAsync);
/*  주어진 함수 배열이나 오브젝트를 동시에 실행시킴 (함수 실행 순서 알 수 없음)
    모든 함수 실행이 끝나면 콜백이 호출됨.
    
    실행 중 에러가 있으면 그 이후로는 중단 됨.
*/

function resultAsync(err, results){
    if(err) console.log(err);	
    console.log(results);
}