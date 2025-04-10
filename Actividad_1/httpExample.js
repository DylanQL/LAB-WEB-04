// httpExample.js
const http = require('http');

// Creamos un servidor que responda "Hola desde Node.js"
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hola desde Node.js\n');
});

// Escuchamos en el puerto 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${port}`);
});
