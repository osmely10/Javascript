const usuario = {
    nombre: 'osmely',
    edad: 27,
    amigos: ['cesar','kharmary','orledy','sam'],
    saludo: () => {
        console.log('Hola');
    },

};

const resultado= Object.entries(usuario);
console.log(`el objeto tiene ${resultado.length} propiedades`);