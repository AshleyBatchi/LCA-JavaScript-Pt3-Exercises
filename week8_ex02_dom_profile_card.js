// Task 1: DOM Elements Selection
const profileCard = document.getElementById("profileCard");
const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");

const updateNameBtn = document.getElementById("updateNameBtn");
const updateRoleBtn = document.getElementById("updateRoleBtn");
const toggleStatusBtn = document.getElementById("toggleStatusBtn");
const changeImageBtn = document.getElementById("changeImageBtn");

// Task 2: Update Name Functionality
updateNameBtn.addEventListener("click", function() {
    const newName = prompt("Enter a new name:");
    if (newName && newName.trim() !== "") {
        profileName.textContent = newName;
    }
});

// Task 2: Update Role Functionality
updateRoleBtn.addEventListener("click", function() {
    const newRole = prompt("Enter a new role:");
    if (newRole && newRole.trim() !== "") {
        profileRole.textContent = newRole;
    }
});

// Task 3: Toggle Active Status Class
toggleStatusBtn.addEventListener("click", function() {
    profileCard.classList.toggle("active-status");
});

// Task 4: Change Profile Image URL (Bonus)
changeImageBtn.addEventListener("click", function() {
    const newImgUrl = prompt("Enter a new image URL:");
    if (newImgUrl && newImgUrl.trim() !== "") {
        profileImage.src = newImgUrl;
    }
});