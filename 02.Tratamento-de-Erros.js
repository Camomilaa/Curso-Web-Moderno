const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
try{
    for(let i = 0; i<10; i++){
        if(vetor[i] != undefined){
            console.log(vetor[i]);
        } else{
            throw 'Indice não existe!';
        }
    }
}catch(e){
    console.error(e);
}finally{
    console.log('pronto!')
}