// osExample.js
const os = require('os');

// Plataforma (win32, linux, darwin, etc.):
console.log('Plataforma:', os.platform());

// Arquitectura (x64, arm, etc.):
console.log('Arquitectura:', os.arch());

// Información de CPU:
console.log('Información de CPUs:', os.cpus());

// Memoria total del sistema (en bytes):
console.log('Memoria total:', os.totalmem());

// Directorio home del usuario:
console.log('Directorio home:', os.homedir());
