const pessoas = [];
let pessoa;

function pessoinha(nome, idade, email){
    return{
        nome,
        idade,
        email,
        apresentacao: function(){
            console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
}

pessoa = pessoinha('Camila', 21, 'camila@gmail.com');
pessoa.apresentacao();