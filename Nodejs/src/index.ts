import * as matematica from './Matematica';
import validator from 'validator';
/* 
import { somar, subtrair } from './Matematica';

console.log(`SOMA: ${somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${subtrair(n1, n2)}`);
*/

//export unico
/* import matematica from './Matematica';
matematica.
*/

let n1: number = 10;
let n2: number = 2;

console.log(`SOMA: ${matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${matematica.subtrair(n1, n2)}`);
console.log(`multiplicação: ${matematica.multiplicar(n1, n2)}`);
console.log(`DIVISÃO: ${matematica.dividir(n1, n2)}`);

let name: string = 'Leo';

if(validator.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula`);
} else {
    console.log(`A string ${name} não é toda minúscula`);
}

let ip = '127.0.0.1';

console.log(validator.isIP(ip));
console.log(validator.isEmail('steamcs2016@gmail.com')); //true or false