class GreenBall extends ExtraBall {

    constructor(x, y, r, ctx, context) {
        super(x, y, r, '#00ff00', ctx, context);
        this.__value = $('#score #greenBallsValue');
    }

    ballFunctionality() {
        super.ballFunctionality();
        THE_MAGIC_BALL.getInstance().playerBall().speed -=2;
    }
}
