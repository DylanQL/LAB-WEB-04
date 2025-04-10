// callbacksExample.js

function obtenerUsuarioCallback(idUsuario, callback) {
    // Simulamos una operación asíncrona (por ejemplo, una consulta a BD o API)
    setTimeout(() => {
      if (idUsuario === 1) {
        // Éxito
        callback(null, { id: 1, nombre: 'Alice' });
      } else {
        // Error
        callback(new Error('Usuario no encontrado'));
      }
    }, 1000);
  }
  
  // Uso
  obtenerUsuarioCallback(1, (error, usuario) => {
    if (error) {
      return console.error('Error con callback:', error.message);
    }
    console.log('Usuario encontrado (callback):', usuario);
  });
  
  obtenerUsuarioCallback(99, (error, usuario) => {
    if (error) {
      return console.error('Error con callback:', error.message);
    }
    console.log('Usuario encontrado (callback):', usuario);
  });
  