const pessoas = [];
let pessoa;

function Pessoa(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.apresentacao = ()=>{
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

pessoas.push(new Pessoa('Marcelo', 22, 'marcelo@gmail.com'));
pessoas.push(new Pessoa('Camila', 21, 'camila@gmail.com'));
pessoas.push(new Pessoa('Alvaro', 21, 'alvaro@gmail.com'));
console.log(pessoas);

pessoas[0].apresentacao();
