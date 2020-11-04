class Bird {
    constructor() {
        this.y = height /2;
        this.x = 64;
    }

    gravity = 1;
    velocity = 0;

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    goUp() {
        this.velocity -= this.gravity;
        console.log(this.velocity);
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}