class YellowBall extends ExtraBall {

    constructor(x, y, r, ctx, context) {
        super(x, y, r, '#ffff00', ctx, context);
        this.__value = $('#score #yellowBallsValue');
    }

    ballFunctionality() {
        super.ballFunctionality();
        THE_MAGIC_BALL.getInstance().playerBall().points = 10;
    }
}
