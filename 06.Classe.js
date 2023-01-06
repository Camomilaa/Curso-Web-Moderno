class Pessoa {
    constructor(nome, idade = 0){
        this.nome = nome;
        this.idade = idade;
    }

    idadeEmDias(){
        console.log(`Tem ${this.idade * 365} dias.`);
        console.log(`Atenção: não contamos com anos bissextos`);
    }
}

let pessoa = new Pessoa('Camila', 21);
pessoa.idadeEmDias();