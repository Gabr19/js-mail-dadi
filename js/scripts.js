const user = prompt ('inserisci la tua email:');
console.log(user)

const iscritti = ["1@mail.com" , "2@mail.com" , "3@mail.com"]
console.log('iscritti' , iscritti , typeof iscritti);

if (user == iscritti) {
    alert ("accesso consentito")
}

else {
    alert("accesso negato")
}
