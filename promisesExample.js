// promisesExample.js

function obtenerUsuarioPromise(idUsuario) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idUsuario === 1) {
          resolve({ id: 1, nombre: 'Alice' });
        } else {
          reject(new Error('Usuario no encontrado'));
        }
      }, 1000);
    });
  }
  
  // Uso
  obtenerUsuarioPromise(1)
    .then((usuario) => {
      console.log('Usuario encontrado (promise):', usuario);
    })
    .catch((error) => {
      console.error('Error con promise:', error.message);
    });
  
  obtenerUsuarioPromise(99)
    .then((usuario) => {
      console.log('Usuario encontrado (promise):', usuario);
    })
    .catch((error) => {
      console.error('Error con promise:', error.message);
    });
  