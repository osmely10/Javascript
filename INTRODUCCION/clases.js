class Usuario {
    tipo= 'usuario'
    constructor (nombre, apellido) {
        this.nombre=nombre;
        this.apellido=apellido;

        console.log('nuevo usuario registrado');
    }

    obtenerNombreCompleto(){
        console.log('obteniendo datos...')
        return `${this.nombre} ${this.apellido}`
    }


}

const usuario=new Usuario ('osmely', 'sangronis');
console.log(usuario.obtenerNombreCompleto())

