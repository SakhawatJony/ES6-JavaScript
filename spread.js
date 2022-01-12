const numbers = [20,30,40,50,60,70,80];
// console.log(numbers);

const maxInArray = Math.max(...numbers);
console.log(maxInArray);


const numbers2 = [50,...numbers, 100];
numbers.push(255);
// console.log(numbers);
console.log(numbers2);