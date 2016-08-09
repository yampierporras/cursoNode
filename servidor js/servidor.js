var http = require('http');

http.createServer(function(peticion, respuesta){
	respuesta.writeHead(200, {'Content-Type':'text/plain'});
	respuesta.write('Hola mundo');
	respuesta.end();
}).listen(3000, 'localhost');

console.log('EL servidor se muestra en http://localhost:3000');