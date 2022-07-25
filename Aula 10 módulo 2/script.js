let html = '';

let c = 0;

while(c < 10) {
    html += "Número: " + c + "</br>";
    c++;
}

document.getElementById("demo").innerHTML = html;

//usando for
/* 
for(let c =1; c <= 10; c++) {
    html += "Número: " + c + "</br>";
}
*/