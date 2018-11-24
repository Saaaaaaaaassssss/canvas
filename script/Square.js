export default class Square {
    constructor(_x, _y, _ctx, _dimensions, _cursor) {
        this.squarePositionX = _x
        this.squarePositionY = _y
        this.squareWidth = Math.random() * 10 + 10
        this.squareHeight = Math.random() * 10 + 10
        this.ctx = _ctx
        this.screen = _dimensions
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`

        this.angle = Math.random() * Math.PI * 2
        this.moveSquare = {
            x: Math.cos(this.angle),
            y: Math.sin(this.angle)
        }
        
        this.squareOut = false
    }

    drawSquare() {
        this.squarePositionX +=  2.5 * this.moveSquare.x
        this.squarePositionY += 2.5 * this.moveSquare.y

        if (this.squarePositionX <= this.screen.width / 2) {
            this.squarePositionX *= 0.9
            this.squarePositionY *= 1
        }

        if (this.squarePositionX > this.screen.width / 2) {
            this.squarePositionX *= 1
            this.squarePositionY *= 0.9
        } 

        if (
            this.squarePositionX > this.screen.width + this.squarePositionX ||
            this.squarePositionY > this.screen.height + this.squareHeight ||
            this.squarePositionX < - this.squareWidth ||
            this.squarePositionY < - this.squarePositionY
        ) {
            this.squareOut = true
        }

        this.ctx.save()
        this.ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.ctx.rect(this.squarePositionX, this.squarePositionY, this.squareWidth, this.squareHeight)
        this.ctx.stroke()
        this.ctx.restore()
    }
}