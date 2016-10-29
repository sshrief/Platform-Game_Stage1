var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var mySprite;
var mySprite2;
var x = game.width/2;
var y = game.height/2 -50;
var dirX = 10;
var dirY = 10;

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
    y = y + (1 * dirY);
    if ( x > game.width - mySprite.width || x < 0 ) {
      dirX = -dirX;
    }
    if ( y > game.height - mySprite.height || y < 0 ) {
      dirY = -dirY;
    }
    mySprite.x =x;
    mySprite.y =y;
}
