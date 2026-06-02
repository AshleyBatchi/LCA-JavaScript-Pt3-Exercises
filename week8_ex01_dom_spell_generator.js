// Get elements
const spellArea = document.getElementById("spellArea");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const ingredients = document.querySelectorAll("#ingredientsList li");

// Generate random color
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Generate spell
generateButton.addEventListener("click", function () {

    let count = 3;

    spellArea.textContent = count;

    let countdown = setInterval(function () {

        count--;

        if (count > 0) {
            spellArea.textContent = count;
        } else {

            clearInterval(countdown);

            const randomIngredient =
                ingredients[Math.floor(Math.random() * ingredients.length)].textContent;

            spellArea.textContent =
                "✨ Your magical spell uses: " + randomIngredient + " ✨";

            spellArea.style.backgroundColor = randomColor();
        }

    }, 1000);
});

// Reset button
resetButton.addEventListener("click", function () {

    spellArea.textContent = "";
    spellArea.style.backgroundColor = "white";

});