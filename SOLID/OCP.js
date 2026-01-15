//bad example
// class Bookkeeping {
//     constructor(name, amount, position) {
//         this.name = name
//         this.amount = amount
//         this.position = position
//     }

//     calculateSalary() {
//         if (this.position === "junior") {
//             return this.amount + 500
//         } else if (this.position === "middle") {
//             return this.amount + 1000
//         } else if (this.position === "senior") {
//             return this.amount + 2000
//         }
//     }
// }


// good example
class Bookkeeping {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }

    calculateSalary() {
        return this.amount
    }
}

class Junior extends Bookkeeping {
    calculateSalary() {
        return super.calculateSalary() + 500
    }
}
class Middle extends Bookkeeping {
    calculateSalary() {
        return super.calculateSalary() + 1000
    }
}
class Senior extends Bookkeeping {
    calculateSalary() {
        return super.calculateSalary() + 2000
    }
}
class Lead extends Bookkeeping {
    calculateSalary() {
        return super.calculateSalary() + 3000
    }
}