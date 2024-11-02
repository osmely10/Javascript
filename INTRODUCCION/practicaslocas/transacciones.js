const procesopago= (total)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const exito = Math.random() < 0.5;
        
        if (exito){
            resolve('Pago exitoso');
        }else {
            reject('Error de pago');
        }
        },1500)
    })
} 


procesopago(100).then((resultado) =>{
    console.log(resultado);
}).catch((error) =>{
    console.log(error);
});