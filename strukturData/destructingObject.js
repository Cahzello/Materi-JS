const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);

// 

const profil = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let awalNama = "Dimas";
let umur = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({awalNama, umur} = profile);
 
console.log(firstName);
console.log(age);

const profili = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {namaAwal, umr, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)

const profilu = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

 