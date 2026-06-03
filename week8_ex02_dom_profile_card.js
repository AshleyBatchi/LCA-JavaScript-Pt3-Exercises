// Get elements
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileCard = document.getElementById("profileCard");
const profileImage = document.getElementById("profileImage");

const updateNameBtn = document.getElementById("updateNameBtn");
const updateRoleBtn = document.getElementById("updateRoleBtn");
const toggleStatusBtn = document.getElementById("toggleStatusBtn");
const changeImageBtn = document.getElementById("changeImageBtn");


// Update Name
updateNameBtn.addEventListener("click", function () {

    const newName = prompt("Enter a new name:");

    if (newName) {
        profileName.textContent = newName;
    }

});


// Update Role
updateRoleBtn.addEventListener("click", function () {

    const newRole = prompt("Enter a new role:");

    if (newRole) {
        profileRole.textContent = newRole;
    }

});


// Toggle Active Status
toggleStatusBtn.addEventListener("click", function () {

    profileCard.classList.toggle("active-status");

});


// Change Profile Image
changeImageBtn.addEventListener("click", function () {

    const newImage = prompt("Enter image URL:");

    if (newImage) {
        profileImage.src = newImage;
    }

});