class BallManager {

    constructor(radius, canvas, context) {
        this.ballsArray = [1, 2, 3, 4];
        this.length = this.ballsArray.length;
        this.radius = radius;
        this.type = 0;
        this.$canvas = canvas;
        this.context = context;
        this.$board = $('#board');
    }

    createBalls() {
        let ball;
        for (let i = 0; i < this.length; i++) {
            this.type =  this.ballsArray[Math.floor(Math.random() * this.length)];
            let diameter = this.radius * 2;
            let minWidth  = Math.floor(this.$board.position().left + diameter * 2);
            let minHeight = Math.floor(this.$board.position().top + diameter * 2);
            let maxWidth = this.$canvas.width() - diameter;
            let maxHeight = this.$canvas.height() - diameter;

            let x = Utils.randomIntFromInterval(minWidth, maxWidth);
            let y = Utils.randomIntFromInterval(minHeight, maxHeight);

            switch(this.type) {
        		case 1:
        			ball = new BlueBall(x, y, this.radius, this.$canvas, this.context);
        			break;
        		case 2:
        			ball = new YellowBall(x, y, this.radius, this.$canvas, this.context);
        			break;
        		case 3:
        			ball = new GreenBall(x, y, this.radius, this.$canvas, this.context);
        			break;
                case 4:
        			ball = new PurpleBall(x, y, this.radius, this.$canvas, this.context);
        			break;
                default:
                    ball = new BlueBall(x, y, this.radius, this.$canvas, this.context);
            }
        }
        return ball;
    }
}
