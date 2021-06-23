class Checkout {
  constructor () {
    this.fee = 0.1
  }

  getTotalPrice (value) {
    return value + value * this.fee
  }
}

const checkout = new Checkout()
console.log(checkout.getTotalPrice(10))
checkout.fee = 0.2
console.log(checkout.getTotalPrice(10))
