var restify = require('restify');

function respond(req, res, next){
	res.send('hello'+ req.params.name);
	next();
}

var server = restify.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080);
console.log('%s : url: %s', server.name, server.url);