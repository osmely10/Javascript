function primerapromesa (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('primera promesa')
        },1000)
    });
}

function segundapromesa(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Segunda promesa')
        },2000)
    });
}

async function llamadodepromesas(){
    try{
        const primero = await primerapromesa();
        console.log(primero);
        const segundo = await segundapromesa();
        console.log(segundo);
    }catch(error){
        console.log('ocurrio un Error')
    }
};

llamadodepromesas();