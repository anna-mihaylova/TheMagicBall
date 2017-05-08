class BlueBall extends ExtraBall {

    constructor(x, y, r, ctx, context) {
        super(x, y, r, '#0000ff', ctx, context);
        this.__value = $('#score #blueBallsValue');
    }

    ballFunctionality() {
        super.ballFunctionality();
        THE_MAGIC_BALL.getInstance().playerBall().speed += 2;
    }
}
