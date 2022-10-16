// for loop

for(let i = 0; i < 5; i++) {
    console.log(i);
}

// for of loop

// array loop

for(arrayItem of myArray) {
    // do something
}

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

// while and do while

// while

let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

let z = 1;

// do 

do {
    console.log(z);
    z++;
} while (z <= 100);

// example of infinite loops

let a = 1;
 
while (a <= 5) {
    console.log(a);
}

for(let i = 1; i <= 5; i=1) {
    console.log(i);
}
