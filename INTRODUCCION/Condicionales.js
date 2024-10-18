const usuario = {
    edad: 17,
    pais:'mexico',
    ticket:true,
}

if(usuario.edad > 18){
    console.log('El usuario es mayor de edad, puede entrar al concierto');
} else {
    console.log('El usuario es menor de edad, no puede entrar al concierto');
}

const usuar = {
    edad: 18,
    pais:'mexico',
    ticket:true,
}

if (usuar.edad >= 18 && usuar.ticket) {
    console.log('El usuario es mayor de dad y tiene un ticket');
} else {
    console.log('el usuario es menor de edad o no tiene ticke');
}

const usuario3 = {
    edad: 18,
    pais:'mexico',
    ticket:false,
}

if (usuario3.edad >= 18) {
    if(usuario3.ticket) {
        console.log ('Es mayor de edad y tiene un ticket');
    } else {
        console.log ('Es mayor de edad, pero no tiene ticket');
    }
} else {
    console.log('El usuario es menor de edad');
}

const usuario4 = {
    edad: 18,
    pais:'peru',
    ticket:false,
}

if (usuario4.pais=== 'mexico') {
    console.log('El usuario es mexicano');
} else if (usuario4.pais=== 'venezuela') {
    console.log ('El usuario es venezolano')
} else if (usuario4.pais=== 'colombia'){
    console.log ('El usuario es colombiano');
} else {
    console.log ('El usuario es de otro pais');
}