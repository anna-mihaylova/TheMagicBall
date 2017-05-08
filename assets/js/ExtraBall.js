class ExtraBall extends Ball {

    constructor(x, y, r, color, ctx, context) {
        super(x, y, r, color, ctx, context);
    }

    counter() {
        let counter = +this.__value.html() + 1;
        this.__value.text(counter);
    }

    ballFunctionality() {
        this.clearBall();
        this.counter();
        THE_MAGIC_BALL.getInstance().playerBall().drawBall();
    }

    take() {
        if ((THE_MAGIC_BALL.getInstance().playerBall().x >= this.x - THE_MAGIC_BALL.getInstance().playerBall().radius && THE_MAGIC_BALL.getInstance().playerBall().x <= this.x + THE_MAGIC_BALL.getInstance().playerBall().radius ) &&
            (THE_MAGIC_BALL.getInstance().playerBall().y >= this.y - THE_MAGIC_BALL.getInstance().playerBall().radius && THE_MAGIC_BALL.getInstance().playerBall().y <= this.y + THE_MAGIC_BALL.getInstance().playerBall().radius )) {
            this.x = 0;
            return this.ballFunctionality();
        }
    }
}
