let imgPets = document.querySelectorAll(".pets-img");
let clickPets = document.querySelectorAll(".pets-clicks");

let counterClicks1 = 1;
let counterClicks2 = 1;

const getClick1 = function() {
    clickPets[0].innerHTML = `${counterClicks1}`;
    counterClicks1 += 1;
};

const getClick2 = function() {
    clickPets[1].innerHTML = `${counterClicks2}`;
    counterClicks2 += 1; 
};

imgPets[0].addEventListener('click', getClick1);
imgPets[1].addEventListener('click', getClick2);


