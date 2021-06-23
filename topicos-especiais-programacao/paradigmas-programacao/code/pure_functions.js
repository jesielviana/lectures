function getTotalPrice (value, fee) {
  return value + value * fee
}

console.log(getTotalPrice(10, 0.1))
