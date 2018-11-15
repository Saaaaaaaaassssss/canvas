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
    }
}

for(let i = -1000; i < 1000; i += 20) {  
    const ball = new Ball()
    
    ctx.beginPath()
    ctx.fillStyle = 'purple'
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fill()
}

//RESIZE
window.addEventListener('resize', () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
})