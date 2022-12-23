const user = prompt ('inserisci la tua email:');
console.log('user' , user, typeof user)

const iscritti = ['1@mail.com' , '2@mail.com' , '3@mail.com'];
console.log('iscritti' , iscritti , typeof iscritti);

let validEmail = true;

if (validEmail == true) {

    let canAccess = false;

    for(let i = 0; i <= iscritti.lenght; i = i + 1){

    console.log('iscritti[i]', iscritti[i], typeof iscritti[i])
        if(iscritti [i] == user){
            canAccess = true;
            
    if(canAccess == true){
        alert('puoi entrare')
    }
    else{
        alert('non puoi entrare')
    }
        
    }
}
}

else {
        alert("accesso negato")
}

