// Getränke
const target = document.querySelector('food');

let drink1 = document.getElementById("drink1");

target.addEventListener('click', handleClick1);

function handleClick1() {
  drink1.innerHTML = "Getränk 1";
}

