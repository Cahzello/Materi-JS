// example type data in js

let x;
console.log(typeof(x));

/* output: undefined */

let r = 10;
console.log(typeof(r))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

// example of bigInt 

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// string

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer)

let greetings = "Hello";
let moreGreet = greetings + greetings;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Boolean

let g = true;
let v = false;

console.log(typeof(g))
console.log(typeof(v))

/* output: 
boolean
boolean
*/

// Null

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// Symbol

const id = Symbol("id") ;

console.log(id);

/* output
Symbol(id)
*/