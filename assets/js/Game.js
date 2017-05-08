const THE_MAGIC_BALL = (function() {

    let instance;

    function BallGame() {

        const _game = {
            gameWidth: $("#game")[0].clientWidth,
            gameHeight: $("#game")[0].clientHeight,
            play: true,
            gameEnd: false,
            pointsForWin: 70,
            ballsCounter: 100,
            ballsArray: [],
            $game: $('#game'),
            $board: $('#game>#board')
        };

        const _balls = {
            playerBallRadius: 30,
            playerFirstX: 80,
            playerFirstY: 335,
            ballsRadius: 7
        };

        let bindEvents = function() {
            document.addEventListener('keyup', function(e) {
                _game.playerBall.handleKeys(e.keyCode, false);
            });

            document.addEventListener('keydown', function(e) {
                _game.playerBall.handleKeys(e.keyCode, true);
            });

            document.addEventListener('click', function(e) {
                if (e.target.id === 'howToPlayButton') {
                    rulse();
                }
            });

        }

        let removeRules = function() {
            if ($("#rules")) {
                $("#rules").addClass('hidden');
            }
        }

        let rulse = function() {
            $("#rules")
                .removeClass('hidden')
                .click(function() {
                    removeRules()
                })
        }

        let createCanvas = function() {
            let $canvasPlayerBall = document.createElement('canvas');
            $canvasPlayerBall.setAttribute("id", "canvasPlayerBoard")
            $canvasPlayerBall.width = _game.$board.width();
            $canvasPlayerBall.height = _game.$board.height();
            _game.$board[0].appendChild($canvasPlayerBall);
            _game.$canvasPlayerBall = $('#canvasPlayerBoard')
            _game.canvasPlayerBallcontext = _game.$canvasPlayerBall[0].getContext('2d')

            let $canvasExtraBalls = document.createElement('canvas');
            $canvasExtraBalls.setAttribute("id", "canvasExtraBallsBoard")
            $canvasExtraBalls.width = _game.$board.width();
            $canvasExtraBalls.height = _game.$board.height();
            _game.$board[0].appendChild($canvasExtraBalls);
            _game.$canvasExtraBallsBoard = $('#canvasExtraBallsBoard')
            _game.canvasExtraBallsContext = _game.$canvasExtraBallsBoard[0].getContext('2d')
        }

        let createBalls = function() {
            _game.playerBall = new PlayerBall(_balls.playerFirstX, _balls.playerFirstY, _balls.playerBallRadius, _game.$canvasPlayerBall, _game.canvasPlayerBallcontext);
            _game.ballManager = new BallManager(_balls.ballsRadius, _game.$canvasExtraBallsBoard, _game.canvasExtraBallsContext);

            for (let i = 0; i < _game.ballsCounter; i++) {
                let ball = _game.ballManager.createBalls();
                _game.ballsArray.push(ball);
            }
        }

        let drawBall = function() {
            if (_game.ballsArray[0]) {
                _game.colorBall = _game.ballsArray[0];
                _game.ballsArray[0].drawBall();
                _game.ballsArray.shift();
            }
        }

        let drawBallInterval = function() {
            let interval;
            Utils.clearInterval(interval);
            interval = setInterval(function() {
                _game.canvasExtraBallsContext.clearRect(0, 0, 1200, 800);
                drawBall();
                _game.ballsCounter--;
            }, 2000)
        }

        let checkForWin = function() {
            let div;
            if (_game.playerBall) {
                if (_game.playerBall.points >= _game.pointsForWin) {
                    div = $("<div></div>")
                        .attr('id', 'alert')
                        .html('Congratulations! \n You win')
                        .appendTo(_game.$game);
                    _game.play = false;
                    newGame();
                }
                if (_game.playerBall.points < 0 || _game.playerBall.speed <= 0 || _game.playerBall.lose || _game.ballsCounter < 0) {
                    div = $("<div></div>")
                        .attr('id', 'alert')
                        .html('You lose! \n Maybe Next Time!')
                        .appendTo(_game.$game);
                    _game.play = false;
                    newGame();
                }
            }
        }

        let newGame = function() {
            let timeOut;
            Utils.clearSetTimeOut(timeOut);
            timeOut = setTimeout(function() {
                return location.reload();
            }, 2000);
        }

        let gameLoop = function() {
            if (_game.play) {
                _game.playerBall.move();
                _game.playerBall.out();
                _game.playerBall.drawBall();
                _game.playerBall.upgrade();
                checkForWin();
                if (_game.colorBall) {
                    _game.colorBall.take();
                }
            }
            requestAnimationFrame(gameLoop);
        };

        return {
            init: function() {
                createCanvas();
                createBalls();
                drawBallInterval();
                bindEvents();
                gameLoop();
            },
            playerBall: function() {
                return _game.playerBall
            }
        };
    }

    return {
        getInstance: function() {

            if (!instance) {
                instance = new BallGame();
            }

            return instance;
        }
    };

})();
