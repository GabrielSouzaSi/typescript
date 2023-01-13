// função tradicional
// function add (a: number, b: number) :number {
//   return a + b
// }
// console.log(add(2,2));

// função Arrow Functions
const add = (a: number, b: number): number => a + b;
// console.log(add(2,2));

// função Arrow Functions com parametro opcional
const addTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax != "undefined") {
    return a + b - tax;
  }
  return a + b;
};
// console.log(addTax(2, 2, 1));
// console.log(addTax(2, 2));

// função Arrow Functions com parametro default
const applyDiscount = (price: number, percentage: number = 5): number => price - (price * (percentage/100))
// console.log(applyDiscount(100));

// função rest parameters
const totalNumbers = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach(num => total+= num);
  return total
}
console.log(totalNumbers(2,3,5,10));
