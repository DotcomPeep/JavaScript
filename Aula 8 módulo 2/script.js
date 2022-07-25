let dia = 6;
let diaNome = '';
switch(dia) {
    case 1:
        diaNome = 'Domingo';
        break;
    case 2:
        diaNome = 'Segunda-Feira';
        break;
    case 3:
        diaNome = 'Terça-Feira';
        break;
    case 4:
        diaNome = 'Quarta-Feira';
        break;
    case 5:
        diaNome = 'Quinta-Feira';
        break;
    case 6:
        diaNome = 'Sexta-Feira';
        break;
    case 7:
        diaNome = 'Sábado'
        break;

}

document.getElementById("dia").innerHTML = "Hoje é: " + diaNome;

//mostrando se a pessoa esta em um dia comercial
/*switch(dia) {
    case 1:
    case 6:
        diaNome = 'Final de semana';
        break;
    default:
        diaNome = 'Dia de semana';
        break;

document.getElementById("dia").innerHTML = "Hoje é: " + diaNome;
}*/