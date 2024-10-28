class Producto{
    tipo = 'compra';
    constructor(nombre,precio,descripcion,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.stock=stock;
        console.log('Obteniendo los datos del producto...');
    }
    aumentarStock(cantidad){
        this.stock+=cantidad;
    }
    disminuirStock(cantidad){
        if (cantidad>this.stock){
            console.log('No hay suficiente producto para esta compra');
        }else{
            this.stock -=cantidad;
        }  
    }
    totaldecompra(cantidad){
        if (cantidad>this.stock){
            console.log('No hay suficiente producto para esta compra');
            return 0;
        }else {
            return this.precio * cantidad;
        }
    }

}

const factura= new Producto('Shampoo',50000,'Anticaspa a base de arcilla',6);
console.log(factura.totaldecompra(8));