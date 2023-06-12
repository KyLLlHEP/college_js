let selectedAvatar = null;

// Import section
import { images } from "./images.js";

// Event handler for loading the page
window.addEventListener("load", function () {
  //Retrieve the span element with ID "name"
  const nameElement = document.getElementById("name");

  //Requesting a username via prompt
  const username = prompt("Enter your username:");

  if (username && username.trim() !== "") {
    //If the user has entered a name and it is not empty, display it in uppercase
    nameElement.textContent = username.toUpperCase();
  }
});

// Get random images
const getRandomImage = (images) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Function to generate a random avatar
const genRandomAvatar = () => {
  const avatarDiv = document.getElementById("avatar");

  const randomImage = getRandomImage(images);
  const imgElement = document.createElement("img");
  imgElement.src = randomImage;

  avatarDiv.innerHTML = "";
  avatarDiv.appendChild(imgElement);

  selectedAvatar = randomImage;
};

//Event handler for the "CREATE AVATAR" button
document.getElementById("btnGen").addEventListener("click", genRandomAvatar);

// set avatar section

const setAvatar = () => {
  if (selectedAvatar) {
    const setAvatarDiv = document.getElementById("setavatar");
    const avatarDiv = document.getElementById("avatar");

    setAvatarDiv.style.backgroundImage = `url(${selectedAvatar})`;
    setAvatarDiv.style.display = "block";
    avatarDiv.style.display = "block";

    document
      .getElementById("btnGen")
      .removeEventListener("click", genRandomAvatar);
  }
};

document.getElementById("btnSet").addEventListener("click", setAvatar);
