function clicou () {
    document.getElementById("titulo").innerHTML = "Obrigado"; //altera a mensagem ao clicar no botão
}

function digitou(e) {
    if(e.keyCode == 13 && e.ctrlKey == true) { //Enter
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}

function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function limpar() {
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}

function mostrarTelefone(substituir) {
    substituir.style.display = 'none';
    document.getElementById("telefone").style.display = "block";
}