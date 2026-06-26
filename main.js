const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContentn = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContentn = tamanhoSenha;
}
console.log(botoes);