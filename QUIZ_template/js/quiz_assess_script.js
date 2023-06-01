// import
import { questions } from "./questions.js";

// Call and show players name
document.addEventListener("DOMContentLoaded", () => {
  //save name in the  varibal
  const nameInput = prompt("Enter your name:");
  //pull back name for Id'name'
  const nameElement = document.getElementById("name");
  nameElement.textContent = nameInput;
});
// Lunch quiz. Hav fun =)

document.getElementById("btn-start").addEventListener("click", () => {
  // Add style 'display none' hide  start section
  document.getElementById("topsection").style.display = "none";
  // display question section
  document.getElementById("quiz-section").style.display = "block";
  //show question
  displayQuestion();
});

const displayQuestion = () => {
  const currentQuestion = getQuestion(); //get random question from array
  document.getElementById("question").textContent = currentQuestion.question;
};

// get random question
const getQuestion = () => {
  const questionsCopy = [...questions];
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions.splice(randomIndex, 1)[0]; // Retrieve and return a random question
};
