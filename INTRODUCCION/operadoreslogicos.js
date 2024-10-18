const nombre = 'carlos';
const edad = 19;
const tieneEntrada = false;
const tienePermiso = true;

const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log ('Acceso permitido al concierto:' + permitirAcceso);