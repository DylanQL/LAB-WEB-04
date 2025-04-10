// asyncAwaitExample.js

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
  
  async function mostrarUsuario(idUsuario) {
    try {
      // "await" detiene la ejecución de la función hasta que la promesa se resuelva o rechace
      const usuario = await obtenerUsuarioPromise(idUsuario);
      console.log('Usuario encontrado (async/await):', usuario);
    } catch (error) {
      console.error('Error con async/await:', error.message);
    }
  }
  
  // Uso
  mostrarUsuario(1);   // Debería mostrar el usuario
  mostrarUsuario(99);  // Debería mostrar el error
  