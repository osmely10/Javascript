const mipromesa= new Promise ((resolve,reject)=>{
    setTimeout(()=> {
            resolve('¡promesa cumplida');
    },2000);
});

mipromesa.then((mensaje)=>{
    alert(mensaje);
});