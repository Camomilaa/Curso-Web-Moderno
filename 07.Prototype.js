function MeuObjeto(){ }
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
const obj3 = {};

console.log(obj1.__proto__ === MeuObjeto.prototype); //pai do objeto é igual a prototipo da função contrutora
console.log(obj1.__proto__ === obj2.__proto__); //todos os objetos advindos da mesma função contrutora tem o mesmo prototipo
console.log(obj1.__proto__ === obj3.prototype) //Objetos literais possuem outro tipo de prototipo
console.log(obj3.__proto__ === Object.prototype) //o prototipo deles é padrão para todos os objetos literais
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(MeuObjeto.prototype === Function.prototype)
console.log(MeuObjeto.prototype.__proto__)

