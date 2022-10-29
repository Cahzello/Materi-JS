// Case 1

let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
 
// --------------------

// Case 2

let son = '{ "name": "Yoda", "age": 20 }';
 
try {
    let pengguna = JSON.parse(son);
 
    if (!pengguna.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(pengguna.name); // Yoda
    console.log(pengguna.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}