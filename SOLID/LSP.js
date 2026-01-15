//bad example
// class Vehicle {
//   startEngine() {
//     console.log("Engine started")
//   }
// }
// class Bicycle extends Vehicle {
//   startEngine() {
//     throw new Error("Bicycles don't have engines")
//   }
// }
// function testVehicle(vehicle) {
//   vehicle.startEngine()
// }

// let car = new Vehicle()
// testVehicle(car)
// const bike = new Bicycle()
// testVehicle(bike)


//good example
class Vehicle {
  move() {
    throw new Error("Method must be implemented")
  }
}
class Car extends Vehicle {
  move() {
    console.log("Car is driving");
  }
}
class Bicycle extends Vehicle {
  move() {
    console.log("Bicycle is pedaling")
  }
}
function drive(vehicle) {
  vehicle.move()
}

let car = new Car()
let bike = new Bicycle()
drive(car)
drive(bike)

