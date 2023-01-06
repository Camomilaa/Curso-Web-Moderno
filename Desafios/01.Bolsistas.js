const alunos = [
    {nome: 'João', nota: 7.6, bolsista: false},
    {nome: 'Ana', nota: 6.6, bolsista: true},
    {nome: 'Guilherme', nota: 5.4, bolsista: false},
    {nome: 'Sebastião', nota: 9.2, bolsista: true},
    {nome: 'Samara', nota: 3.0, bolsista: false},
    {nome: 'Felipe', nota: 8.8, bolsista: true}, 
]

//Todos os alunos do array são bolsistas.
const todosBolsistas = alunos.map((aluno) => aluno.bolsista).reduce((resultado, proximo)=>resultado&&proximo);
console.log(todosBolsistas);

//Algum dos alunos do array é bolsista.
const algumBolsista = alunos.map((aluno)=>aluno.bolsista).reduce((resultado, proximo)=>resultado||proximo);
console.log(algumBolsista);