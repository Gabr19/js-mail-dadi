const userNumber = Math.floor(Math.random() * 6 + 1)
const pcNumber = Math.floor(Math.random() * 6 + 1)

console.log('userNumber' , userNumber, typeof userNumber)
console.log('pcNumber' , pcNumber , typeof pcNumber )

if(userNumber > pcNumber){
    alert('user vincitore')

}
else if(userNumber < pcNumber){

    alert('pc vincitore')

}
else{
    alert('pareggio')
}
