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
  //Create an <img> element and set its image source
  const imgElement = document.createElement("img");
  imgElement.src = randomImage;

  // Clear content of <div> with id="avatar"
  avatarDiv.innerHTML = "";

  // Add <img> in <div>
  avatarDiv.appendChild(imgElement);
};

//Event handler for the "CREATE AVATAR" button
document.getElementById("btnGen").addEventListener("click", genRandomAvatar);

// set avatar section

const displayAllImages = (images) => {
  const imagesContainer = document.getElementById("imagesContainer");
  imagesContainer.innerHTML = "";

  images.forEach((imagePath) => {
    const imgElement = document.createElement("img");
    imgElement.src = imagePath;

    imgElement.addEventListener("click", () => {
      const setAvatarDiv = document.getElementById("setavatar");
      const avatarDiv = document.getElementById("avatar");

      // Set the selected image as the background of setavatar
      setAvatarDiv.style.backgroundImage = `url(${imagePath})`;
      // Show the setavatar and hide the imagesContainer
      setAvatarDiv.style.display = "block";
      imagesContainer.style.display = "none";
      // Show the generate avatar button
      avatarDiv.style.display = "block";
    });

    imagesContainer.appendChild(imgElement);
  });
};

document.getElementById("btnSet").addEventListener("click", () => {
  const setAvatarDiv = document.getElementById("setavatar");
  const avatarDiv = document.getElementById("avatar");
  const imagesContainer = document.getElementById("imagesContainer");
  // Show Images Container
  imagesContainer.style.display = "block";
  // Hide Set Avatar
  setAvatarDiv.style.display = "none";
  // Hide Generate Avatar
  avatarDiv.style.display = "none";
  // Display all images
  displayAllImages(images);
});
