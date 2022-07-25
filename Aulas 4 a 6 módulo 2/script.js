//Array

//let carro1 = 'GTR-R34';
//let carro2 = 'Silvia';
//let carro3 = '180sx';
//let carro4 = 'GTR-R32';

let nissan = ['GTR-R34', 'Silvia', '180sx', 'GTR-R32'];
//let nissan = new Array['GTR-R34', 'Silvia', '180sx', 'GTR-R32']; //codigos mais antigos podem ser assim
/* let nissan = [
    'GTR-R34', 
    'Silvia', 
    '180sx', 
    'GTR-R32'
    function() {
        console.log('Testando 1, 2, 3...);
    }
];
*/

console.log(nissan);

//Objeto

let carro = {
    nome:'Toyota',
    modelo: 'Corolla',
    peso: '1.420Kg',
    ligado: false,
    ligar:function() {
        this.ligado = true;
        console.log("Ligando o " + this.modelo);
        console.log("Sistemas operantes");
    },
    acelerar:function() {
        if(this.ligado == true) {
            console.log("vrum vrum");
            console.log("nhãããããm");
        } else{
            console.log(this.nome + " " + this.modelo + " não está ligado!!!");
        }
    }
};

console.log(carro['nome']);
console.log(carro['modelo']);

console.log("Modelo: " + carro.modelo);

carro.ligar();
carro.acelerar();

//colocando um objeto dentro de um array

/*
let carros = [
    {nome: 'Nissan', modelo: 'GTR-R34'},
    {nome: 'Nissan', modelo: 'Silvia'},
    {nome: 'Toyota', modelo: 'Corolla'}
];

console.log(carros);
console.log(carros[2]); // corolla
console.log(carros[2].modelo); ou console.log(carros[2] ['modelo']); // corolla
// sempre usar .modelo e não ['modelo']
*/