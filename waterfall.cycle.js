var async = require('async');

async.waterfall([boy1,boy2,boy3],resultAsync);
/*  task가 순서대로 실행된다는점에서 series와 같음.
    하지만 다른점은 아래와 같음.

    첫째. result가 파이널 콜백에 전부 모이는게 아님.
        각 test들 사이로 전달됨. 단어 그대로 폭포처럼
    둘째. tasks는 오브젝트가 아닌 어레이만 가능
	    간단히 표현하면 이건 args 전달이 자유로운 메소드 체인
*/
function boy1(callback){
    callback(null, '111', 'one');
}
function boy2(arg1, arg2, callback){
    console.log('arg1+arg2 : '+arg1+' + '+arg2);
	callback(null,'two');
}

function boy3(arg, callback){
	console.log('arg : '+arg);
	callback(null, 'three');
}

function resultAsync(err,result){
	if(err) console.log(err);
	console.log('success : '+result);
}