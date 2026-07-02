var a = 23;
let b = 45;
const d = 67;

console.log(a);
console.log(b);
console.log(d);

//make function using function declaration
function addNumbers(x, y) {
    return x + y;
}

console.log(addNumbers(5, 10));

//make function using let or var
let multiplyNumbers = function(x, y) {
    return x * y;
}

console.log(multiplyNumbers(5, 10));

