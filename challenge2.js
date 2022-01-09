/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`)
}
greet("Ali");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
    return(n%2 != 0);
}
console.log(`is 7 odd?: ${isOdd(7)}`);
console.log(`is 10 odd?: ${isOdd(10)}`);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let smallerOdd = n/2;
  smallerOdd = smallerOdd - ((n%2)/2);
  return (smallerOdd);
}
console.log(`number of odd numbers smaller than 7: ${oddsSmallerThan(7)}`);
console.log(`number of odd numbers smallers than 15: ${oddsSmallerThan(15)}`);


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n))
  {
    return (n**2);
  }else
  {
    return (n*2);
  }
}
console.log(`1- square if it's odd:
2- double if it's even: 
  16 is: ${squareOrDouble(16)}
  9 is: ${squareOrDouble(9)}
`);



module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
