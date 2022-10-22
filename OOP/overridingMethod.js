class Mail {
    constructor(author) {
      this.from = author;
      this._contacts = [];
    }
  
    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }
  
    showAllContacts() {
      return this._contacts;
    }
  
  }
  
  class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
  }
  
  const wa1 = new WhatsApp('dicoding', true, '6281111111');
  
  console.log(wa1.username)
  console.log(wa1.isBussinessAccount)
  console.log(wa1.from); 
  wa1.sendMessage('halo', '064648684684684')

