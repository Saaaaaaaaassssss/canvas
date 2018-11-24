export default class Square {
    constructor(_x, _y, _ctx, _dimensions) {
        this.squarePositionX = _x
        this.squarePositionY = _y
        this.squareWidth = Math.random() * 5
        this.squareHeight = Math.random() * 5
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
        this.squarePositionX += this.moveSquare.x
        this.squarePositionY += this.moveSquare.y

        if (
            this.squarePositionX > this.screen.width + (this.x / 2) ||
            this.squarePositionX > this.screen.height + (this.y / 2) ||
            this.squarePositionY < 0 ||
            this.squarePositionY < 0
        ) {
            this.squareOut = true
        }

        this.ctx.fillStyle = this.color
        this.ctx.rect(this.squarePositionX, this.squarePositionY, this.squareWidth, this.squareHeight)
        this.ctx.stroke()
    }
}