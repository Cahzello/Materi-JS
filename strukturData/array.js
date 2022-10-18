let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);
console.log()

myArray.push('JavaScript');
console.log(myArray);
console.log()

myArray.pop();
console.log(myArray);
console.log()

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);
console.log()

delete myArray[1];
console.log(myArray);
console.log()

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);


