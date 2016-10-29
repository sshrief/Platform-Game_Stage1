var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var mySprite;
var mySprite2;
var x = game.width/2 -50;
var y = game.height/2 -50;
var x2 = game.width/2 -100;
var y2 = game.width/2 -100;
var dirX = 10;
var dirY = 10;
var dirX2 = 5;
var dirY2 = 5;

function preload() {
    game.load.image('ball', 'assets/ball.png');

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#333';
    mySprite = game.add.sprite( 600,480, 'ball');
    mySprite2 = game.add.sprite(300, 244, 'ball');
    game.physics.enable(mySprite, Phaser.Physics.ARCADE);
    game.physics.enable(mySprite2, Phaser.Physics.ARCADE);
}

function update () {

    x = x + (1 * dirX);
    x2 = x2 + (1 * dirX2);
    y = y + (1 * dirY);
    y2 = y2 + (1 * dirY2);
    if ( x > game.width - mySprite.width || x < 0 ) {
      dirX = -dirX;
    }
    if ( x2 > game.width - mySprite2.width || x2 < 0) {
      dirX2 = -dirX2;
    }
    if ( y > game.height - mySprite.height || y < 0 ) {
      dirY = -dirY;
    }
    if ( y2 > game.height - mySprite.height || y2 < 0) {
      dirY2 = -dirY2
    }
    mySprite.x =x;
    mySprite.y =y;
    mySprite2.x =x2;
    mySprite2.y =y2;

    game.physics.arcade.collide(mySprite, mySprite2, yahoo)
}

function yahoo() {
  console.log("yahoo");
  console.log("something");
  mySprite2.body.enable = false;
}
