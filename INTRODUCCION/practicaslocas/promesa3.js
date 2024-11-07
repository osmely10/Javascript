const promesa = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let exito = Math.random()>0.5;
            if(exito){
                resolve('Promesa resulta')
            }else{
                reject('Error')
            }
        },2000)
    });
};

promesa().then((promesa)=>{
    console.log(promesa)
}).catch((error)=>{
    console.log(error)
});