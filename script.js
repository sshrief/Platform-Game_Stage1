var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var mySprite;
var mySprite2;
var x = game.width/2;
var y = game.height/2 -50;
var dirX = 10;
var dirY = 10;
var dirX2 = 10;
var dirY2 = 10;

function preload() {
    game.load.image('ball', 'assets/ball.png');

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#333';
    mySprite = game.add.sprite( 600,480, 'ball');
    mySprite2 = game.add.sprite(300, 240, 'ball');
}

function update () {

    x = x + (1 * dirX);
    x2 = x + (1 * dirX2);
    y = y + (1 * dirY);
    y2 = y + (1 * dirY2);
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
}
