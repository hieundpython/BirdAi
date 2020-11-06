import {
    Bird
} from './bird.js';
import {
    Pipe
} from './pipe.js';

var bird;
var pipes = [];

function setup() {
    createCanvas(400, 400);
    bird = new Bird();
    pipes.push(new Pipe());
}


function draw() {
    background(0);
    bird.think();
    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

    for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.goUp();
    }
}

window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;