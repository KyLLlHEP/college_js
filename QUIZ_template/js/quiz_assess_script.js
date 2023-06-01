// Call and show players name

document.addEventListener("DOMContentLoaded", () => {
  //save name in the  varibal
  const nameInput = prompt("Enter your name:");
  //pull back name for Id'name'
  const nameElement = document.getElementById("name");
  nameElement.textContent = nameInput;
});
