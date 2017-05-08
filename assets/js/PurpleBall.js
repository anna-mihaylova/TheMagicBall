class PurpleBall extends ExtraBall {

    constructor(x, y, r, ctx, context) {
        super(x, y, r, '#800080', ctx, context);
        this.__value = $('#score #purpleBallsValue');
    }

    ballFunctionality() {
        super.ballFunctionality();
        THE_MAGIC_BALL.getInstance().playerBall().points -= 10;
    }
}
