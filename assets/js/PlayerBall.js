class PlayerBall extends Ball {

    constructor(x, y, radius, ctx, context) {
        super(x, y, radius, '#ff0000', ctx, context);
        this.__isMovingTop = false;
        this.__isMovingBottom = false;
        this.__isMovingRight = false;
        this.__isMovingLeft = false;
        this.__firstX = x;
        this.__firstY = y;
        this.__lose = false;
        this.__points = 0;
        this.__speed = 5;
        this.__$points = $('#score #pointsValue');
        this.__$speed = $('#score #speedValue');
    }

    get firstX() {
        return this.__firstX;
    }

    set firstX(value) {
        this.__firstX = value;
    }

    get lose() {
        return this.__lose;
    }

    set lose(value) {
        if (typeof value === 'boolean') {
            this.__lose = value;
        }
    }

    get firstY() {
        return this.__firstY;
    }

    set firstY(value) {
        this.__firstY += value;
    }

    set speed(value) {
        if (value >= -10 && value <= 10) {
            this.__speed = value;
        }
    }

    get speed() {
        return this.__speed;
    }

    set points(value) {
        if (value >= -10 && value <= 30) {
            this.__points += value;
        }
    }

    get points() {
        return this.__points;
    }

    move() {
        this.__context.clearRect(0, 0, 1200, 800);

        if  (this.__isMovingTop) {
            this.__y -= this.__speed;
        }

        if  (this.__isMovingBottom) {
            this.__y += this.__speed;
        }

        if  (this.__isMovingLeft) {
            this.__x -= this.__speed;
        }

        if  (this.__isMovingRight) {
            this.__x += this.__speed;
        }
    }

    handleKeys(key, value) {
        switch(key) {
            case 37:
                this.__isMovingLeft = value;
                break;
            case 38:
                this.__isMovingTop = value;
                break;
            case 39:
                this.__isMovingRight = value;
                break;
            case 40:
                this.__isMovingBottom = value;
                break;
        }
    }

    upgrade() {
        this.__$points.text(this.__points);
        this.__$speed.text(this.__speed);
    }

    out() {
        if ((this.__x < this.__radius || this.__x > this.__ctx.width() - this.__radius) || this.__y < this.__radius || this.__y > this.__ctx.height() - this.__radius) {
            this.__y = this.firstY;
            this.__x = this.firstX;
            this.__lose = true;
        }
    }
}
