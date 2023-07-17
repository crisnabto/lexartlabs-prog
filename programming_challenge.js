const array = ["a", 10, "b", "hello", 122, 15];

// Obtain an array containing only letters

const lettersArray = array.filter((item) => typeof(item) === 'string');

console.log('Only letters array:', lettersArray);

// Obtain an array containing only numbers

const numbersArray = array.filter((item) => typeof(item) === 'number');

console.log('Only numbers array:', numbersArray);

// Obtain the largest number from the previous array

let largestNumber = numbersArray.reduce((prev, cur) => prev > cur ? prev : cur);

console.log('Largest number:', largestNumber);