class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}

const mail1 = new Mail(085000111222); // 
const mail2 = new Mail("emailku@dicoding.com"); // 
