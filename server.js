var restify = require('restify');
var async = require('async');

async.series([boy1,boy2,boy3],resultAsync);

function boy1(callback){ callback(null,'boy1'); }
function boy2(callback){ callback(null,'boy2'); }
function boy3(callback){ callback(null,'boy3'); }
function resultAsync(err, results){
	if(err) console.log(err);
	
	console.log(results);
	console.log('boy 1 : '+results[0]);
}

function respond(req, res){ res.send('hello'+ req.params.name);
}

var server = restify.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000);
console.log('%s',server.url);