// Grab our DOM element handles
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const spellArea = document.getElementById('spellArea');
const ingredientsList = document.getElementById('ingredientsList');

// Task 3, 4, & 5: Generate Spell Logic with Countdown and Random Colors
generateButton.addEventListener('click', () => {
    let countdown = 3;
    spellArea.innerText = countdown;

    // Task 5: Countdown interval from 3 to 1
    const timer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            spellArea.innerText = countdown;
        } else {
            clearInterval(timer);
            
            // Task 3: Select a random item from the HTML list elements
            const items = ingredientsList.getElementsByTagName('li');
            const randomIndex = Math.floor(Math.random() * items.length);
            const randomIngredient = items[randomIndex].innerText;
            
            // Display the ingredient as the spell
            spellArea.innerText = `✨ Casted Spell: ${randomIngredient} ✨`;

            // Task 4: Change background to a random RGB color string
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            spellArea.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }, 1000);
});

// Task 6: Reset Button Functionality
resetButton.addEventListener('click', () => {
    spellArea.innerText = "Generate a spell!";
    spellArea.style.backgroundColor = "transparent";
});