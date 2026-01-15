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
        if (new.target === Bookkeeping) {
            throw new Error("Cannot instantiate abstract class")
        }
        this.name = name
        this.amount = amount
    }

    calculateSalary() {
        throw new Error("Method must be implemented")
    }
}

class Junior extends Bookkeeping {
    calculateSalary() {
        return this.amount + 500
    }
}
class Middle extends Bookkeeping {
    calculateSalary() {
        return this.amount + 1000
    }
}
class Senior extends Bookkeeping {
    calculateSalary() {
        return this.amount + 2000
    }
}
class Lead extends Bookkeeping {
    calculateSalary() {
        return this.amount + 3000
    }
}
