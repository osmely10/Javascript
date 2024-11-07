const producto =['harina','maiz','azucar','sal'];


const promesabasica= ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(producto.length == 0){
                reject('Sin productos');
            }else{
                resolve(producto);
            }
        },2000)
    });
}

async function promesa(){
try{ 
    const mensaje = await promesabasica();
    console.log(mensaje);
}catch(error){
    console.log(error);
}
};

promesa();