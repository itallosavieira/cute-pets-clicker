const nums = [1, 2, 3, 4, 5];

for (let num of nums) {
    const element = document.createElement("div");
    element.textContent = num;
    document.body.appendChild(element);
    element.addEventListener("click", function(){
        alert(num);
    });
}

