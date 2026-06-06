let developers = [];
let cardView = true;

fetch("../developers.json")
.then(response => response.json())
.then(data => {
developers = data;
displayDevelopers(developers);
});

const container =
document.getElementById("developerContainer");

function displayDevelopers(data){

container.innerHTML = "";

document.getElementById("developerCount")
.textContent = data.length;

if(cardView){

data.forEach(dev => {

container.innerHTML += `
<div class="col-md-4 mb-4">

<div class="card p-3 h-100">

<img src="${dev.avatar}"
class="img-fluid mb-2">

<h5>${dev.name}</h5>

<p>${dev.role}</p>

<p>${dev.location}</p>

<p>${dev.skills.join(", ")}</p>

<span
class="badge ${
dev.availableForHire
? "bg-success"
: "bg-secondary"
}
hire-badge"
onclick="toggleHire(${dev.id})"
>

${dev.availableForHire
? "Available For Hire"
: "Not Available"}

</span>

</div>
</div>
`;
});
}
else{

container.innerHTML = `
<table class="table table-bordered">
<thead>
<tr>
<th>Name</th>
<th>Role</th>
<th>Location</th>
<th>Status</th>
</tr>
</thead>
<tbody id="tableBody">
</tbody>
</table>
`;

const tableBody =
document.getElementById("tableBody");

data.forEach(dev => {

tableBody.innerHTML += `
<tr>
<td>${dev.name}</td>
<td>${dev.role}</td>
<td>${dev.location}</td>

<td>

<span
class="badge ${
dev.availableForHire
? "bg-success"
: "bg-secondary"
}
hire-badge"
onclick="toggleHire(${dev.id})"
>

${dev.availableForHire
? "Available"
: "Unavailable"}

</span>

</td>
</tr>
`;
});
}
}

document
.getElementById("searchInput")
.addEventListener("keyup", function(){

const value =
this.value.toLowerCase();

const filtered =
developers.filter(dev =>

dev.name.toLowerCase().includes(value)

||

dev.role.toLowerCase().includes(value)

||

dev.skills.join(" ")
.toLowerCase()
.includes(value)

);

displayDevelopers(filtered);

});

document
.getElementById("toggleViewBtn")
.addEventListener("click", function(){

cardView = !cardView;

displayDevelopers(developers);

});

function toggleHire(id){

developers.forEach(dev => {

if(dev.id === id){

dev.availableForHire =
!dev.availableForHire;

}

});

displayDevelopers(developers);

}

document
.getElementById("developerForm")
.addEventListener("submit",
function(event){

event.preventDefault();

const name =
document.getElementById("name").value;

const role =
document.getElementById("role").value;

const skills =
document.getElementById("skills").value;

if(
name === "" ||
role === "" ||
skills === ""
){
alert("Fill in all fields");
return;
}

developers.push({

id: developers.length + 1,

name,

role,

skills: skills.split(","),

avatar:
"https://placehold.co/100x100",

availableForHire:true,

location:"South Africa"

});

displayDevelopers(developers);

this.reset();

});