const $canvas = document.querySelector('.js-canvas')
const ctx = $canvas.getContext('2d')

let width = $canvas.width
let height = $canvas.height

class Ball {
    constructor() {
        this.radius = Math.random() * 30
        this.x = Math.random() * width - this.radius
        this.y = Math.random() * height - this.radius
        this.rotation = Math.random() * 2 * Math.PI
    }
}

const test = new Ball()

test.y > height - test.radius ? test.y = height - test.radius : test.y = Math.random() * height - test.radius
test.y < test.radius ? test.y = test.radius : test.y = Math.random() * height - test.radius
test.x > width - test.radius ? test.x = width - test.radius : test.x = Math.random() * width - test.radius
test.x < test.radius ? test.x = test.radius : test.x = Math.random() * width - test.radius

ctx.beginPath()
ctx.fillStyle = 'purple'
ctx.arc(test.x, test.y, test.radius, 0, Math.PI * 2)
ctx.fill()

console.log(test)