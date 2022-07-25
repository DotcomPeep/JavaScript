//FOR LOOP

let texto = '';

for(let i = 0; i <= 50; i++) {
    texto = texto + i + '</br>';
}

document.getElementById("demo").innerHTML = texto;

//FOR LOOP ARRAY
//Lista com todos os itens do array separadamente

let carros = ['Nissan', 'Toyota', 'Mitsubishi', 'Mazda'];

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';

document.getElementById("demo").innerHTML = html;