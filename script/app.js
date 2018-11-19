const $canvas = document.querySelector('.js-canvas')
const ctx = $canvas.getContext('2d')

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

class Ball {
    constructor() {
        this.radius = Math.random() * 30 + 8
        this.x = Math.random() * $canvas.width - this.radius
        this.y = Math.random() * $canvas.height - this.radius
        this.rotation = Math.random() * 2 * Math.PI
        this.mouseX = 0
        this.mouseY = 0
        this.dist = 2 * this.radius
    }

    resize() {
        window.addEventListener('resize', () => {
            $canvas.width = window.innerWidth
            $canvas.height = window.innerHeight
        })
    }

    ballsCreation() {
        for(let i = 0; i < 120; i ++) {  
            const balls = new Ball()

            ctx.globalCompositeOperation = 'lighter'
            ctx.beginPath()
            ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            ctx.arc(balls.x, balls.y, balls.radius + 8, 0, Math.PI * 2)
            ctx.fill()
        
            ctx.globalAlpha = 0.8
            ctx.beginPath()
            ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            ctx.arc(balls.x, balls.y, balls.radius, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    updateMouse() {
        document.addEventListener('mousemove', (event) => {
            this.mouseX = event.clientX 
            this.mouseY = event.clientY 
        })
    }

    followingBall() {
        const loopingBalls = () =>
        {
            window.requestAnimationFrame(loopingBalls)
        
            this.x += (this.mouseX - this.x) * 0.1
            this.y += (this.mouseY - this.y) * 0.1
        
            ctx.globalAlpha = 0.2
            ctx.fillStyle = '#FFF'
        
            ctx.beginPath()
            ctx.arc(this.mouseX, this.mouseY, 20, 0, Math.PI * 2)
            ctx.globalAlpha = 0.8
            ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            ctx.fill()
        }
        loopingBalls()
    } 
}

const final = new Ball()

final.ballsCreation()
final.updateMouse()
final.followingBall()

const loop = () => {
    window.requestAnimationFrame(loop)

    final.resize()
}
loop()



