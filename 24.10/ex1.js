class rectangle{
    constructor(width , heigth) {
        this.width = width
        this.heigth = heigth
    }
    area() {
        return this.width * this.heigth
    }
    perimeter() {
        return 2 * (this.width + this.heigth)
    }
}
const myRectangle = new rectangle(5, 3)
console.log("Area", myRectangle.area())
console.log("Perimeter", myRectangle.perimeter())