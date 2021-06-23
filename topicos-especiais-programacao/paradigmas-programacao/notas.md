# Paradigmas de programação
- - - -
### Objetivos de aprendizagem
- Conhecer os principais paradigmas de programação
- Compreender as principais características dos paradigmas orientado a objetos e funcional

- - - -

## Paradigma de Programação
- Não se refere a uma linguagem específica
- Termo referente a o estilo de programação, a forma como a programação é organizada
- Tipo de abordagem para se resolver problemas com programação

- - - -

## Procedural
- Imperativo, **foca em como resolver o problema**, descrevendo o passo-a-passo para cada procedimento;
- As instruções devem ser passadas ao computador na sequência em que devem ser executadas
- C, C++, Pascal, Cobol, Javascript, PHP, etc

- - - -

## Orientado a Objetos
- Imperativo,  o mais popular, o programa deve ser escrito de forma modular com associação direta aos objetos do mundo real.
- O código é escrito como uma coleção de classes e objetos, que se comunicam entre si.
- Focado em abstração
- Java, Python, PHP, Typescript, etc

- - - -

## Funcional
- Declarativo,  **foca em o que é necessário para resolver o problema**, descrevendo o fluxo de dados.
- Baseado no uso de funções é destaque. O problema é dividido em blocos e, para sua resolução, são implementadas funções que definem variáveis em seu escopo e retornam algum resultado. 
- É bastante indicado quando a solução requerida é fortemente dependente de uma base matemática e/ou processamento paralelo/concorrente (devido a imutabilidade).  
- Elixir, Haskell, Clojure, Javascript.

- - - -

## Conceitos importantes de Orientação a Objetos x Funcional
- Orientação a objetos
	- Classes, objetos e estados
	- Abstração, herança, encapsulamento, polimorfismo
- Programação funcional
	- Imutável
	- Funções puras

- - - -

## Exemplos de código OO x Funcional
```javascript
const numbers = [1, 2, 4, 6, 7, 9, 19, 43, 55, 60, 72]
// Filtrar números ímpares

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

```

- - - -

## Dados mutáveis (Javascript)
```javascript
const list = [1, 2, 3]
console.log(list) // [ 1, 2, 3 ]

list.pop()
console.log(list) // [ 1, 2 ]

list.push(4)
console.log(list) // [ 1, 2, 4 ]
```

- - - -

## Dados imutáveis (Elixir)
```elixir
list = [1, 2, 3, 4]
IO.inspect(list) # [1, 2, 3, 4]

List.delete_at(list, -1)
IO.inspect(list) # [1, 2, 3, 4]

list ++ [1]
IO.inspect(list) # [1, 2, 3, 4]
```

- - - -

## Funções puras
```javascript
function getTotalPrice (value, fee) {
  return value + value * fee
}

console.log(getTotalPrice(10, 0.1)) // 11
```

- - - -

## Funções impuras
```javascript
class Checkout {
  constructor () {
    this.fee = 0.1
  }

  getTotalPrice (value) {
    return value + value * this.fee
  }
}

const checkout = new Checkout()
console.log(checkout.getTotalPrice(10)) // 11
checkout.fee = 0.2
console.log(checkout.getTotalPrice(10)) // 12
```

- - - -

## Referências
- [What exactly is a programming paradigm?](https://www.freecodecamp.org/news/what-exactly-is-a-programming-paradigm/)
- [Introduction of Programming Paradigms - GeeksforGeeks](https://www.geeksforgeeks.org/introduction-of-programming-paradigms/)
[https://blog.betrybe.com/tecnologia/paradigmas-de-programacao/](https://blog.betrybe.com/tecnologia/paradigmas-de-programacao/)
- [YouTube](https://www.youtube.com/watch?v=EefVmQ2wPlM&t=1s)