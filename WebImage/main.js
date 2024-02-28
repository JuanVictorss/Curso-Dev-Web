
const images = [
     "images/CristianoBicicleta.jpg",
     "images/siuuuu.jpg"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function(){
    currentIndex++
    if (currentIndex >= images.length){
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})