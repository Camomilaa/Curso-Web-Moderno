const http = require('http');
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`;
    return new Promise((resolve, reject)=>{
        http.get(url, res=>{
            let resultado = '';
            res.on('data', dados=>{
                resultado += dados;
            })
            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

//recurso ES8

let obterAlunos = async () =>{
    const ta = await getTurma('a')
    const tb = await getTurma('b')
    const tc = await getTurma('c')
    return [].concat(ta, tb, tc)
} //retorna objeto asyncFunction

obterAlunos().then(alunos => alunos.map(aluno => aluno.nome)).then(console.log)