
//variáveis de sons
let raquetada;
let ponto;
let trilha;

//váriaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//variáveis oponente
let xOponente = 585
let yOponente = 150

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;

colisao = false;

//variaveis de movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis pontos
playerPontos = 0;
oponentePontos = 0;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xOponente, yOponente);
  movimentoRaquete();
  colisãoRaquete(xRaquete, yRaquete);
  colisãoRaquete(xOponente, yOponente);
  movimentoOponente();
  mostraPontos();
}

//funções bolinha
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha(){
  
  if (xBolinha + raio > width){
    velocidadeXBolinha *= -1;
    playerPontos += 1
    ponto.play()
  }
  if(xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    oponentePontos += 1
    ponto.play()
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
}

//funções raquetes
function mostraRaquete(x, y){
  rect(x, y, widthRaquete, heightRaquete);
}

function movimentoRaquete(){
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 6
  }
  
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 6
  }
}

function colisãoRaquete(x, y){
  colisao = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, raio);
  if (colisao){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}

function movimentoOponente(){
  velocidadeYOponente = yBolinha - yOponente - widthRaquete / 2 - 70;
  yOponente += velocidadeYOponente + chanceDeErrar;
}

function mostraPontos(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(playerPontos, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255)
  text(oponentePontos, 470, 26);
}



