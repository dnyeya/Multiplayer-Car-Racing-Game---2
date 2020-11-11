var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
function preload(){
  car1image = loadImage("images/car1(1).png")
  car2image = loadImage("images/car2.png")
  car3image = loadImage("images/car3.png")
  car4image = loadImage("images/car4.png")
  groundimage = loadImage("images/ground.png")
  trackimage = loadImage("images/track.png")
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
