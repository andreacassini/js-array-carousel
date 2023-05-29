//ARRAY IMMAGINI
let picsList = ['./assets/img/01.webp','./assets/img/02.webp','./assets/img/03.webp','./assets/img/04.webp','./assets/img/05.webp']

//VAR sliderElem
const sliderElem = document.querySelector('.slider');

let sliderImages = "";

for (let i = 0; i < picsList.length; i++){

    let pictures = picsList[i];

    sliderImages += `
    <div class="slide">
        <img src="${pictures}" alt="slide-${i+1}">
    </div>`
}

sliderElem.innerHTML += sliderImages;

const slides = document.querySelectorAll('.slide');

let activeSlider = 0;

slides[activeSlider].classList.add('active');
