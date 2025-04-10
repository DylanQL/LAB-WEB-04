// fsExample.js
const fs = require('fs');

const filePath = './archivoDemo.txt';
const fileContent = 'Contenido de prueba para el archivo.';

// Escribiendo un archivo de forma sincrónica:
fs.writeFileSync(filePath, fileContent);
console.log('Archivo creado y escrito con éxito.');

// Leyendo el archivo que acabamos de crear:
const data = fs.readFileSync(filePath, 'utf-8');
console.log('Contenido del archivo:', data);
