function falar(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //reject(frase)
            resolve(frase)
        }, segundos*1000)
    });
}

falar(10, 'esperou 10 segundos, bobão!').then(frase=> frase.concat(' ')).then(fraseFinal => console.log(fraseFinal))
.catch(e => console.error(e))