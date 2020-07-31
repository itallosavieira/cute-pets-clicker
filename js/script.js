let pets = [
    {
        name: "Dog",
        click: 0
    },
    {
        name: "Cat",
        click: 0
    },
    {
        name: "Pig",
        click: 0
    },
    {
        name: "Bird",
        click: 0
    },
    {
        name: "Fish",
        click: 0
    }
]

for (let pet of pets) {
    const openPost = function() {
        document.body.appendChild(postPet);
        postPet.appendChild(imgPet);
        postPet.appendChild(clickPet);
    }
    const countClick = function() {
        pet.click = pet.click + 1;
        clickPet.textContent = pet.click;
    }

    const listPets = document.createElement("li");
    listPets.textContent = pet.name;

    const postPet = document.createElement("div");
    const imgPet = document.createElement("img");
    imgPet.src = `img/${pet.name}.jpg`;

    const clickPet = document.createElement("p");
    clickPet.textContent = pet.click;

    document.body.appendChild(listPets);

    listPets.addEventListener('click', openPost);
    imgPet.addEventListener('click', countClick)
}
    