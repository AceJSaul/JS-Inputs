//1. Window Prompt:
let nomedeUsuario;

nomedeUsuario = window.prompt(`Nome de Usuário`);

console.log(`O nome do usuário é: ${nomeUsuario}`);

//2. TextBox Html

let nomeTextBox
document.getElementById("submit").onclick = function(){
    nomeTextBox = document.getElementById("nomeUsuario").value;
    console.log(`O nome de usuário (textbox) é: ${nomeTextBox}`);
    document.getElementById('welcome').textContent = `Olá ${nomeTextBox}!`
}