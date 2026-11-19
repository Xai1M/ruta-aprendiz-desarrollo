// primer ejercicio
function addTwoAndSeven() {
  return 2 + 7;
}

console.log(addTwoAndSeven());

function addThreeAndFour() {
  return 3 + 4;
}

console.log(addThreeAndFour());

// segundo ejercicio más complejo

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25))
console.log(calculateSquareRoot(100))

//boolean checking functions

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho(1)); // false
console.log(booWho("true")); // false

// Mask email function

function maskEmail(email){
  const [localPart, domain] = email.split("@");
  const maskedLocal = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1];
  return `${maskedLocal}@${domain}`;
}
const email = "apple.pie@example.com";
console.log(maskEmail(email));