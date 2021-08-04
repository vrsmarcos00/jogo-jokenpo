var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorPontos = 0;
var computadorEscolha = 0;

//Exibe mensagem no Console
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//Define o nome do jogador na tela
function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

//Sorteia entre dois números
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Calcula e retorna quem ganhou.
// 0 - Empate
// 1 - jogador
// 2 - Computador
function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        return 2;
    } 
    else if (jogador == 1 && computador == 3) {
        return 1;
    } 
    else if (jogador == 2 && computador == 1) {
        return 1;
    } 
    else if (jogador == 2 && computador == 2) {
        return 0;
    } 
    else if (jogador == 2 && computador == 3) {
        return 2;
    } 
    else if (jogador == 3 && computador == 1) {
        return 2;
    } 
    else if (jogador == 3 && computador == 2) {
        return 1;
    } 
    else if (jogador == 3 && computador == 3) {
        return 0;
    }

}

//Soma pontos para o jogador
function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

//Soma pontos para o computador
function somarPontoComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

//Escolhe a jogada do usuário
//1- pedra 2- Papel 3- Tesoura
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    //Sorteia a jogada do computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0) {
        mensagem("Empate");
    } 
    else if (ganhador == 1) {
        mensagem("Vitória " + jogadorNome);
        somarPontoJogador();
    } 
    else if (ganhador == 2) {
        mensagem("Vitória Computador");
        somarPontoComputador();
    }

    setTimeout(function () {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);
        mensagem(jogadorNome + ' escolha uma opção...');
    }, 3500);
}

document.getElementById('jogador-escolha-1').onclick = function () {
    jogar(1);
}
document.getElementById('jogador-escolha-2').onclick = function () {
    jogar(2);
}
document.getElementById('jogador-escolha-3').onclick = function () {
    jogar(3);
}

jogadorNome = prompt('Qual é o seu nome ?');

document.getElementById('mensagem').innerHTML = "Bem-vindo " + jogadorNome +
    " está preparado? Escolha uma opção acima ...";
definirNomeJogador(jogadorNome);