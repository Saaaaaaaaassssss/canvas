export default class Ball {
    constructor(_ctx, _dimensions) {
        this.ctx = _ctx
        this.screen = _dimensions

        this.x = Math.random() * this.screen.width
        this.y = Math.random() * this.screen.height
        this.radius = Math.random() * 20 + 10
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.angle = Math.random() * Math.PI * 2
        this.move = {
            moveX: Math.cos(this.angle) + Math.random(),
            moveY: Math.sin(this.angle) + Math.random()
        }
        this.ballOut = false

        this.draw = this.drawBalls.bind(this)
    }

    drawBalls() {
        this.x += this.move.moveX
        this.y += this.move.moveY
        
        this.sizeOnTime = Math.random()

        if (
            this.x > this.screen.width + this.radius ||
            this.y > this.screen.height + this.radius ||
            this.x < - this.radius ||
            this.y < - this.radius
        ) {
            this.ballOut = true
        }

        this.ctx.save()
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
        this.ctx.restore()

        if (this.radius < 40) {
            if (this.sizeOnTime > 0.5) {
                this.radius += 1.5
            } else if (this.sizeOnTime < 0.5) {
                if (this.radius - 1.5 > 0) {
                    this.radius -= 1.5
                } else {
                    this.radius += 1.5
                }
            }
        } else {
            this.radius -= 3
        }
        
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color          
        this.ctx.fill()
        this.ctx.restore()
    }
}