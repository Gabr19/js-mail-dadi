const user = prompt ('inserisci la tua email:');
console.log(user)

const iscritti = ["1@mail.com"]
console.log('iscritti' , iscritti , typeof iscritti);

let x = user;
let y = iscritti;

if (x == y) {
    alert ("accesso consentito")
    
    
}

else {
    alert("accesso negato")
}

