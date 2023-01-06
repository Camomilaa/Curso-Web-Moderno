const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('oi, Anonimo aqui\n')
    process.exit
} else{
    process.stdout.write(`Informe o seu nome:`)
    process.stdin.on('data', data=>{
        const nome = data.toString().replace('\r\n', '');
        process.stdout.write(`oi ${nome} aqui\r\n`)
        process.exit
    })
}