const persona = {
    nombre: 'carlos',
    edad: '27',
    correo: 'correo@correo.com',
   suscripciones: {
    web: true,
    correo: true
   },
coloresFavoritos:['negro','rojo'],
saludo: function () {
    alert('Hola!');
}
};

console.log(persona.nombre);
console.log(persona['edad']);
//1
const variable = 'suscripciones';

persona.pais = 'mexico';
console.log(persona);
persona.saludo();