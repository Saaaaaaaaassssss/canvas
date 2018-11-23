export default class Ball {
    constructor(_ctx, _dimensions) {
        this.ctx = _ctx
        this.screen = _dimensions

        this.x = (Math.random() * this.ctx.width) 
        this.y = (Math.random() * this.ctx.height)
        this.radius = (Math.random() * 30) + 5
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.angle = Math.random() * Math.PI * 2

        this.move = {
            moveX: Math.cos(this.angle),
            moveY: Math.sin(this.angle)
        }
        this.draw = this.draw.bind(this)
    }

    draw() {        
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color                
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.restore()
        
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.restore()
        
    }
}
