import Ball from './Ball.js'

export default class Main {
    constructor() {
        this.$canvas = document.querySelector('.js-canvas')
        this.ctx = this.$canvas.getContext('2d')
        this.dimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.$canvas.width = this.dimensions.width
        this.$canvas.height = this.dimensions.height

        this.cursor = {x: 0, y: 0, down: false}

        this.balls = []
        this.ballsNumber = 100

        window.addEventListener('resize', () => this.resize())
        this.resize()

        const loop = () => {
            window.requestAnimationFrame(loop)
            this.cursorBalls()
            this.createBalls()            
        }
        loop()
    }

    resize() {
        this.dimensions.width = window.innerWidth
        this.dimensions.height = window.innerHeight

        this.$canvas.width = this.dimensions.width
        this.$canvas.height = this.dimensions.height
    }

    mousePosition() {
        window.addEventListener('mousemove', (_event) => {
            this.cursor.x = _event.clientX
            this.cursor.y = _event.clientY
        })
    }

    createBalls() {
        for (let i = 0; i < this.ballsNumber - this.balls.length; i++) {
            const ball = new Ball(
                this.ctx,
                this.dimensions
            )
            this.balls.push(ball)
            console.log(this.balls)
        }
        this.updateBalls()  
        
        this.balls = this.balls.filter(_ball => !_ball.ballOut)
        console.log(this.balls.length)
    }

    cursorState() {
        window.addEventListener('mousedown', () => {
            this.cursor.down = true
        })

        window.addEventListener('mouseup', () => {
            this.cursor.down = false
        })
    }

    cursorBalls() {
        this.cursorState()
        this.mousePosition()

        if (this.cursor.down === true) {
            const ball = new Ball(
                this.ctx,
                this.dimensions
            )

            this.balls.push(ball)
        }
        //this.updateBalls()
    }

    updateBalls() {
        this.ctx.fillStyle = '#111111'
        this.ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height)

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw()
        }
        // delete balls
    }
}