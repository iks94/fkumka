const burger = document.getElementById('burger')
const navigacija = document.getElementById('navigacija')

// burger.onclick = myFunction;

// function myFunction() {
//     navigacija.classList.toggle('hide');
//   }

burger.addEventListener('click', obrni)

function obrni(){
    navigacija.classList.toggle('hide');
}