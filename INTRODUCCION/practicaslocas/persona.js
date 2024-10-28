class Persona{
    tipo = 'usuario';
    constructor(nombre,edad,direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    saludo(){
        console.log('Hola soy ');
        return `${this.nombre} tengo ${this.edad} años y vivo en la calle ${this.direccion}`;
    }
}

const Datos= new Persona ('osmely',28,'123a 123b#-46');

console.log(Datos.saludo());