const imgPets = document.querySelector(".pets-img");
const clickPets = document.querySelector(".pets-clicks");
let counterClicks = 1;

const getClick = function() {    
    clickPets.innerHTML = `${counterClicks}`;
    counterClicks += 1;
};

imgPets.addEventListener('click', getClick);