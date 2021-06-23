const numbers = [1, 2, 4, 6, 7, 9, 19, 43, 55, 60, 72]

/**
 * Filtrar números ímpares
 */

// Programação imperativa (estruturada e orientada a objetos)
const odd_numbers_oo = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    odd_numbers_oo.push(numbers[i])
  }
}
console.log(`Odd numbers by OO: ${odd_numbers_oo}`)

// Programação funcional
const odd_numbers_func = numbers.filter(num => num % 2 != 0)
console.log(`Odd numbers by FP: ${odd_numbers_func}`)
