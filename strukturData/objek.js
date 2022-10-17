const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log()

const pengguna = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${pengguna.firstName} ${pengguna.lastName}`);
console.log(`Umur saya ${pengguna.age} tahun`);
console.log(`Saya berasal dari ${pengguna["home world"]}`);
console.log()

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.maxSpeed = 9000
console.log(spaceship);

const kapal = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

kapal.color = "Glossy red";
kapal["maxSpeed"] = 1300;
kapal.class = "Light freighter";

console.log(kapal);
console.log()

const mobil = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

mobil.color = "Glossy red";
mobil["maxSpeed"] = 1300;

delete mobil.manufacturer;

console.log(mobil);






