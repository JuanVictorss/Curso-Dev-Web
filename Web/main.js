 console.log('Cristiano de Bicicleta minha nossa')
let firstName = prompt('Digite o seu primeiro nome: ')
// let lastName = prompt('Digite o seu sobrenome: ')
// let age = parseInt(prompt('Digite sua idade: '))
 //console.log('Seu nome é ' + firstName + ' ' + lastName)
 //console.log('Eu tenho ' + age + ' de idade')
 document.getElementById("greeting").innerHTML = firstName

 let friends = ['jose', 'alan', 'mario', 'cavalo']
 document.getElementById("pessoas").innerHTML = friends

 function changeColor(){
    let titleH1 = document.getElementById('changeh1')
    titleH1.style.color = 'red'
 }

 function changeBackgroundColor(){
    let colors = ['red', 'green', 'black', 'yellow', 'orange', 'pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
 }