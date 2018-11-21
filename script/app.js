class Glitch {
    constructor() {
        this.$canvas = document.querySelector('.js-canvas')
        this.ctx = this.$canvas.getContext('2d')

        this.$canvas.width = window.innerWidth
        this.$canvas.height = window.innerHeight

        this.image = new Image()
        this.image.width = this.$canvas.width        
        this.image.height = this.$canvas.height      
        this.verticalSlices = Math.round(this.image.height / 30)
        this.maxVertical = 40

        console.log(this.$canvas.height)
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;        
    }

    draw() {
        this.image.src = './image/lionBW.png'
        this.image.onload = ()  => {
            this.$this = this
        }

        for (let i = 0; i < this.verticalSlices; i++) {
            this.maxVertical = this.random(- Math.abs(this.maxVertical), this.maxVertical)

            this.ctx.drawImage(this.image, 0, i * this.verticalSlices, this.image.width, i * this.verticalSlices + this.verticalSlices ,
                 this.maxVertical, i * this.verticalSlices, this.image.width, i * this.verticalSlices + this.verticalSlices)

        }

        setTimeout(() => {
            window.requestAnimationFrame(() => {
                this.draw(this.image)
            })
        }, 100)
    } 
}
const glitch = new Glitch()
glitch.random()
glitch.draw()


