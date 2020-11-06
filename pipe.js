class Pipe {
    constructor() {
        this.top = random(height / 2);
        this.bottom = random(height / 2);
        this.w = 20;
        this.x = width;
        this.speed = 2;
        this.highlight = false;
    }

    show() {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    update() {
        this.x -= this.speed;
    }

    offscreen() {
        if (this.x < -this.w) {
            return true;
        }
        return false;
    }

    hits(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
}

export {
    Pipe
};