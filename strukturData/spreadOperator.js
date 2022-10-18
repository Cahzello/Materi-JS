const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
 
console.log()

console.log(...favorites);
console.log()

const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);
console.log()

const kesukaan = [...favorites, ...others];

console.log(kesukaan);
console.log()

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
