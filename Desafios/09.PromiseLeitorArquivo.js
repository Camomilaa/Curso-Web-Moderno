const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    return new Promise((resolve)=>{
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}
const caminho = path.join(__dirname, '09.Dados.txt')
//console.log(caminho)

lerArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `O valor final é: ${conteudo}`)
.then(console.log)
