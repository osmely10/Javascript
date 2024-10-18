const obtenerposts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post= ['post1', 'post2', 'post3','post4'];
            const error= false;

            if(error){
                reject('hubo un error al intentar obtener el posts');
            }else{
                resolve(post);
            }

        },2000);
    });
};

obtenerposts()
    .then((post)=>{
        console.log(post);
    })
    .catch((error)=>{
        console.log(error);
    });