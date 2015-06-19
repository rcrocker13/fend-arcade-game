// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 7 + 1);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        this.speed = Math.floor(Math.random() * 7 + 1);

        this.x -= 650;

        if (Math.random() >= .66) {
            this.y = 60;
        } else if (Math.random() >= .33) {
            this.y = 145;
        } else {
            this.y = 225;
        }

    } else {
        this.x += this.speed + dt;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function() {
}

Player.prototype.render = function(x, y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {

    console.log(direction);

    if (direction = 'left') {
        player.render(player.x - 100, player.y)
    } else if (direction = 'right') {
        player.render(player.x + 100, player.y)
    } else if (direction = 'up') {
        player.render(player.x, player.y - 100)
    } else {
        player.render(player.x, player.y + 100)
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

var bug1 = new Enemy(-150, 60);
var bug2 = new Enemy(-150, 145);
var bug3 = new Enemy(-150, 225);

var allEnemies = [bug1, bug2, bug3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
