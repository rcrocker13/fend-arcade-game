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

        if (Math.random() >= 0.66) {
            this.y = 60;
        } else if (Math.random() >= 0.33) {
            this.y = 140;
        } else {
            this.y = 220;
        }

    } else {
        this.x += this.speed + dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
};

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
};

Player.prototype.render = function(x, y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {

    if (direction === 'left' && this.x === 0) {
        this.x = this.x;
    } else if  (direction === 'right' && this.x === 400) {
        this.x = this.x;
    } else if  (direction === 'down' && this.y === 380) {
        this.y = this.y;
    } else if  (direction === 'up' && this.y === 60) {
        this.x = 200;
        this.y = 380;
    } else if (direction === 'left') {
        this.x -= 100;
    } else if (direction === 'right') {
        this.x += 100;
    } else if (direction === 'up') {
        this.y -= 80;
    } else {
        this.y += 80;
    }

};

Player.prototype.checkCollisions = function() {
    if (player.y === bug1.y && (player.x > bug1.x - 60 && player.x < bug1.x + 60)) {
        player.x = 200;
        player.y = 380;
    } else if (player.y === bug2.y && (player.x > bug2.x - 60 && player.x < bug2.x + 60)) {
        player.x = 200;
        player.y = 380;
    } else if (player.y === bug3.y && (player.x > bug3.x - 60 && player.x < bug3.x + 60)) {
        player.x = 200;
        player.y = 380;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

var bug1 = new Enemy(-150, 60);
var bug2 = new Enemy(-150, 140);
var bug3 = new Enemy(-150, 220);
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