const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < 10; i++){
    if(vetor[i] === 5){
        break;
    }
    console.log(vetor[i]);
}

console.log(' \n \n ')

for(let i = 0; i < 10; i++){
    if(vetor[i] === 5){
        continue;
    }
    console.log(vetor[i]);
}