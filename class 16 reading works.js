const celsius = prompt("What is fahreheit of");
const fahreheit = celsius * (9 / 5) + 32;
console.log(`${fahreheit}`)

const price = prompt("What is the final price of item with 20.6% vat");
const finalPrice = Number(price) + (price * (20.6 / 100));
alert(`${finalPrice}`)

//Let's write some code that helps people decide what to wear based on the weather using "Switch"
const weather = prompt("What's the weather like?");
switch (weather) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}

/* Number of days in a month
    Write a program that accepts a month number (between 1 and 12), 
    then shows the number of days of that month. 
    Leap years are excluded. Incorrect inputs must be taken into account. */

const month = (prompt("How many days does this month have"))
if (month === "1") {
    alert(`January has 31 days`)
}else if (month === "2") {
    alert(`February has 28 days`)
}else if (month === "3") {
    alert(`March has 31 days`)
}else if (month === "4") {
    alert(`April has 30 days`)
}else if (month === "5") {
    alert(`May has 31 days`)
}else if (month === "6") {
    alert(`June has 30 days`)
}else if (month === "7") {
    alert(`July has 31 days`)
}else if (month === "8") {
    alert(`August has 31 days`)
}else if (month === "9") {
    alert(`September has 30 days`)
}else if (month === "10") {
    alert(`October has 31 days`)
}else if (month === "11") {
    alert(`November has 30 days`)
}else if (month === "12") {
    alert(`December has 31 days`)
}else{
    alert(`Not a valid month type`)
}

/* Following second
    Write a program that asks for a time under the form of three information (hours, minutes, seconds). 
    The program calculates and shows the time one second after. 
    Incorrect inputs must be taken into account. */

let hour = Number(prompt("Enter hour"))
let minute = Number(prompt("Enter minute"))
let second = Number(prompt("Enter second"))
if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 58) {
    alert(`The time is ${hour}h ${minute}m ${second+1}s`)
}else if(hour >= 0 && hour <= 23 && minute >= 0 && minute <= 58 && second >= 0 && second <= 59){
    alert(`The time is ${hour}h ${minute+1}m 00s`)
}else if(hour >= 0 && hour <= 22 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59){
    alert(`The time is ${hour+1}h 00m 00s`)
}else if(hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59){
    alert(`The time is 00h 00m 00s`)
}else{
    alert(`Not a valid time`)
}

 // Here's a while loop use case in which a user is asked to type letters over and over until entering X:

    let letter = "";
    while (letter !== "X") {
      letter = prompt("Type a letter or X to exit:");
    }

/* Multiplication table
Write a program that asks the user for a number,then shows the multiplication table for this number. */
const number = prompt("Enter a number to check its multiplication table")
for(n = 1; n <= 100; n++)
console.log(`${number} * ${n} = ${number * n}`)

// Circumference and area of a circle
const radius = prompt("What is circumference of circle with radius");
console.log(2 * Math.PI * radius)
console.log(Math.PI * (Math.pow(radius, 2)));


//Write a program that computes 3 raise to power 5 using for loop instead of while loop
let result = 1;
for (let counter = 0; counter < 5; counter = counter + 1) {
result *= 3;
}
  console.log(result)


  //https://eloquentjavascript.net/ chapter 2 exercise
//     Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// Solution
let p;
for(p = "#"; p.length <= 7; p += "#"){
console.log(p)
}

/* For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
function isEven(x){
  if ((x - 2) % 2 === 0){
  console.log("true")
  }else{
  console.log("false")}
}
console.log(isEven(75))



// solution above will not work for recursion, solution is below
function isEven(y){
  if (y == 0) return true;
  if (y == 1) return false;
  if (y < 0) return isEven(-y);
  else return isEven(y - 2)
}
console.log(isEven(-9))