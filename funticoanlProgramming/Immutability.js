
// sebelum di imun

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

// sesudah di immun

const pengguna = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, pengguna) => {
    return { ...pengguna, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', pengguna);

console.log(newUser);


