const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};
 
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');
 
// pengirim@dicoding.com
// you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
