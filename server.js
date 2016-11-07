var restify = require('restify');

function respond(req, res){ res.send('hello'+ req.params.name);
}

var server = restify.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000);
console.log('%s',server.url);