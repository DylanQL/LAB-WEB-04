// cryptoExample.js
const crypto = require('crypto');

// Creación de un hash SHA-256 de una cadena de texto:
const texto = 'Hola Node.js';
const hash = crypto.createHash('sha256').update(texto).digest('hex');

console.log(`Texto original: ${texto}`);
console.log(`Hash SHA-256: ${hash}`);

// Generación de 16 bytes aleatorios y conversión a formato hex:
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log('Bytes aleatorios:', buffer.toString('hex'));
});
