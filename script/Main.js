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

        this.balls = []
        this.ballsNumber = 100

        window.addEventListener('resize', () => this.resize())
        this.resize()

        const loop = () => {
            window.requestAnimationFrame(loop)
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
    }

    updateBalls() {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw()
        }

        // delete balls
    }
}



