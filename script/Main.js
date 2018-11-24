import Ball from './Ball.js'
import Square from './Square.js'

export default class Main {
    constructor() {
        this.$canvas = document.querySelector('.js-canvas')
        this.ctx = this.$canvas.getContext('2d')
        this.ctx.globalCompositionOperation = 'lighter'        
        this.dimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.$canvas.width = this.dimensions.width
        this.$canvas.height = this.dimensions.height

        this.cursor = {x: 0, y: 0, down: false}

        this.balls = []
        this.ballsNumber = 100

        this.squares = []
        this.squareNumber = 10

        window.addEventListener('resize', () => this.resize())
        this.resize()

        const loop = () => {
            window.requestAnimationFrame(loop)

            this.resize()
            this.mousePosition()
            this.createSquare()
            this.createBalls()            
        }
        loop()
    }


    //RESIZING CANVAS
    resize() {
        this.dimensions.width = window.innerWidth
        this.dimensions.height = window.innerHeight

        this.$canvas.width = this.dimensions.width
        this.$canvas.height = this.dimensions.height
    }


    //UPDATING MOUSE POSITION
    mousePosition() {
        window.addEventListener('mousemove', (_event) => {
            this.cursor.x = _event.clientX
            this.cursor.y = _event.clientY
        })
    }


    //CURSOR STATUS
    cursorState() {
        window.addEventListener('mousedown', () => {
            this.cursor.down = true
        })

        window.addEventListener('mouseup', () => {
            this.cursor.down = false
        })
    }


    //SQUARE'S CREATION
    createSquare() {
        this.cursorState()

        if (this.cursor.down == true) {
            this.mousePosition()

            const square = new Square(
                this.cursor.x,
                this.cursor.y,
                this.ctx,
                this.dimensions,
            )
            this.squares.push(square)
        }

        this.updateSquare()
        this.squares = this.squares.filter(_square => !_square.squareOut)        
    }


    //DRAWING SQUARES
    updateSquare() {
        this.ctx.globalCompositionOperation = 'lighter'
        this.ctx.fillStyle = '#111111'
        this.ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height)

        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].drawSquare()
        }
    }


    //BALL'S CREATION
    createBalls() {
        for (let i = 0; i < this.ballsNumber - this.balls.length; i++) {
            const ball = new Ball(
                this.ctx,
                this.dimensions
            )
            this.balls.push(ball)
        }
        this.updateBalls()  
        this.balls = this.balls.filter(_ball => !_ball.ballOut)

        this.easterEgg()
    }


    //DRAWING BALLS
    updateBalls() {
        this.ctx.fillStyle = '#111111'
        this.ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height)

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].drawBalls()
        }
    }


    //( ͡° ͜ʖ ͡°) 
    easterEgg() {
        if (this.balls.length > 300) {
            for (let i = 0; i < 1; i++) {
                const artyom = new Artyom()
                
                function startArtyom() {
                    startArtyom.initialize({
                        lang: 'fr-FR',
                        continuous: false,
                        debug: true,
                        listen: true
                    })
                }
                artyom.say("Non mais ça va pas la tête ? Arretez d'en générer ! Ça va cracher !")
            }
        }
    }
}
