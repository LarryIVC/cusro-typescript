// Enums

enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function mostrarMensaje ( tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) console.log('No se ha encontrado el recurso');
  if (tipoError === ERROR_TYPES.UNAUTHORIZED) console.log('No tienes permisos para acceder al recurso');
  if (tipoError === ERROR_TYPES.FORBIDDEN) console.log('No tienes permisos para acceder al recurso');
}

