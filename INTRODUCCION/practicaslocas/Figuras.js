class Empleado {
    constructor (nombre,sueldobase,antiguedad){
        this.nombre = nombre;
        this.sueldobase = sueldobase;
        this.antiguedad = antiguedad;
    }
}

class Asalariado extends Empleado {
    constructor (nombre,sueldobase,antiguedad){
        super(nombre,sueldobase,antiguedad);
    }
    sueldoasalariado(){
        console.log(`Sueldo Asalariado: ${this.sueldobase}`)
    }
}

class PorHoras extends Empleado {
    constructor(nombre,sueldobase,antiguedad,horas){
        super(nombre,sueldobase,antiguedad);
        this.horas = horas;
    }
    sueldoporhoras(){
        console.log(`Sueldo Por hora: ${this.sueldobase * this.horas}`)
    }
}
class Comisionista extends Empleado {
    constructor(nombre,sueldobase,antiguedad,porcentaje){
        super(nombre,sueldobase,antiguedad);
        this.porcentaje = porcentaje;
    }
    sueldocomision(ventas){
        let comi= this.sueldobase + (this.porcentaje * ventas);
        return comi;
    }
}

const sueldoasalariado= new Asalariado ('Arturo',2000000,10,'quincenal');
sueldoasalariado.sueldoasalariado();

const sueldoporhoras= new PorHoras ('Arturo',5000,10,8);
sueldoporhoras.sueldoporhoras();

const sueldoporcomision= new Comisionista ('Arturo',50000,10,0.1);
console.log(`sueldo por comision: ${sueldoporcomision.sueldocomision(15000)}`);