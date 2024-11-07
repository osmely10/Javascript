const promesa = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promesa Resuelta');
        },2000)
    });
};

promesa().then((promesa)=>{
    console.log(promesa)
});