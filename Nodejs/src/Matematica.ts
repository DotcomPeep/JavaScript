export let versao: string = '1.0';

export function somar (x: number, y: number): number {
    return x + y;
}

export function subtrair (x: number, y: number): number {
    return x - y;
}

export function multiplicar (x: number, y: number): number {
    return x * y;
}

export function dividir (x: number, y: number): number {
    return x / y;
}

/* versão antiga
module.exports.somar = somar;
module.exports.subtrair = subtrair;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;
*/

//export unico
/* export dafult {
    somar,
    subtrair,
    multiplicar,
    dividir,
    versao
}
*/