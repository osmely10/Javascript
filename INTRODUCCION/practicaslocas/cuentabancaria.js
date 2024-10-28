class CuentaBancaria{
    tipo = 'Bancario';
    constructor (numerocuenta,titular,saldo,ingreso,retiro){
        this.numerocuenta = numerocuenta;
        this.titular = titular;
        this.saldo = saldo;
    }
    ingreso(cantidad){
        if(cantidad>0){
            this.saldo+=cantidad;
            console.log(`se han ingresado${cantidad}. saldo actual: ${this.saldo}`);
        }else {
            console.log('error la cantidad debe ser positiva');
        }
    }

    retiro(cantidad){
        if(cantidad>this.saldo){
            console.log('saldo insuficiente');
        }else if(cantidad>0){
            this.saldo-=cantidad;
            console.log(`se han retirado ${cantidad}. saldo actual ${this.saldo}`);
        }else {
            console.log('la cantidad a retirar debe ser mayor a 0');
        }
    }

    consultarsaldo(){
        console.log(`Saldo actual: ${this.saldo}`);
        return this.saldo;
    }
}
const datosbancarios = new CuentaBancaria (34567898,'Osmely sangronis',459000);
datosbancarios.retiro(200000);
datosbancarios.consultarsaldo();