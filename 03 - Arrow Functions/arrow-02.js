
let numbers = [2, 4, 6, 8, 10];

let double = numbers.map(item => item * 2);
// Arrow function with 1 argument doesn't need '()'
// If the arrow function have only 1 instruction, doesn't need '{}' and the instruction will be consider a return

console.log(double);