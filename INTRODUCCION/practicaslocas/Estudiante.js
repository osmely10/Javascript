class Persona {
    constructor(nombre,edad,dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    MostrarInformacion (){
        console.log('Obteniendo informacion...')
        return `Nombre: ${this.nombre}, edad: ${this.edad}, DNI: ${this.dni}`
    }
}

class Estudiante extends Persona {
    constructor(nombre,edad,dni,carrera,notamedia){
        super(nombre,edad,dni);
        this.carrera = carrera;
        this.notamedia = notamedia;   
    }
    InformacionAcademica(){
        console.log('Academica');
        return `Carrera: ${this.carrera}, Nota: ${this.notamedia}`;
    }
}

const persona = new Persona ('osmely',28,5228988);
console.log(persona.MostrarInformacion());

const estudiante = new Estudiante ('carlos',30,45678,'inginer informatica',18);
console.log(estudiante.MostrarInformacion());
console.log(estudiante.InformacionAcademica());