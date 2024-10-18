const usuario = {
    edad: 27,
    pais: 'colombia',
};

switch (usuario.pais){
    case'mexico':
    console.log ('El usuario es mexicano');
    break;
    case'venezuela':
    console.log ('El usuario es venezolano');
    break;
    case'colombia':
    console.log ('El usuario es colombiano');
    break;
    case'argentina':
    console.log('El usuario es argentino');
    break;
    default:
    console.log('El usuario es de otro pais');

    }
    
