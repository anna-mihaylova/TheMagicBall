class Ball {

    constructor(x = 0, y = 0, radius = 5, color = '#0000ff', ctx, context) {
        this.__x = x;
        this.__y = y;
        this.__radius = radius;
        this.__color = color;
        this.__ctx = ctx;
        this.__context = context;
        if(new.target === Ball) {
            throw new Error("This class cannot be instantiated directly.")
        }
    }

    get x() {
        return this.__x;
    }

    set x(value) {
        if (value < this.__ctx.width() || value > this.__ctx.position().left) {
            this.__x = value;
        }
    }

    get y() {
        return this.__y;
    }

    set y(value) {
        if (value < this.__context.height() || value > position().top) {
            this.__y = value;
        }
    }

    get radius() {
        return this.__radius;
    }

    get color() {
        return this.__color;
    }

    get ctx() {
        return this.__ctx;
    }

    get context() {
        return this.__context;
    }

    clearBall() {
        this.__context.clearRect(0, 0, 1200, 800);
    }

    drawBall() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.restore();
    }
}
