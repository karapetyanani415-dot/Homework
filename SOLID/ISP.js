//bad example 
// class Store {
//   cash() {}
//   card() {}
//   online() {}
//   QR() {}
// }
// class OnlineShop extends Store{
//     online(){
//         console.log("online payment")
//     }
//     card(){
//         console.log("card payment")
//     }
// }


//good example
class CashPayment {
  payCash() {
    throw new Error("Method must be implemented")
  }
}
class CardPayment {
  payCard() {
    throw new Error("Method must be implemented")
  }
}
class OnlinePayment {
  payOnline() {
    throw new Error("Method must be implemented")
  }
}

class OnlineShop extends OnlinePayment {
  payOnline() {
    console.log("online payment")
  }
}
class SuperMarket extends CashPayment {
  payCash() {
    console.log("cash payment")
  }
}

