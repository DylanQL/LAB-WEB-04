// pathExample.js
const path = require('path');

// Unimos directorio actual con un nombre de archivo:
const filePath = path.join(__dirname, 'miArchivo.txt');
console.log('Ruta absoluta unida:', filePath);

// Obtenemos el directorio de un archivo dado:
console.log('Directorio:', path.dirname(filePath));

// Obtenemos la extensión del archivo:
console.log('Extensión:', path.extname(filePath));

// Obtenemos el nombre del archivo (basename):
console.log('Nombre de archivo:', path.basename(filePath));
