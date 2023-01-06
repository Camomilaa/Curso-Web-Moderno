const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    const chineses = func => func.pais.toLowerCase() === 'china';
    const mulheres = func => func.genero.toLowerCase() === 'f';
    const menorSalario = (funcMenorSalario, func) => {
        return funcMenorSalario.salario < func.salario ? funcMenorSalario : func
    }

    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    console.log(resultado)
})