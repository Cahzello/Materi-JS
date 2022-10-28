
// sebelum diubah menjadi pure

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// sesudah diubah menjadi pure

const luasLingakaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(luasLingkaran(4)); // 50.24
  console.log(luasLingakaran(4)); // 50.24
  console.log(luasLingakaran(8)); // 200.96
  console.log(luasLingakaran(8)); // 200.96