// import
import { questions } from "./questions.js";
import { validateInput } from "./validation.js";

// Call and show players name
document.addEventListener("DOMContentLoaded", () => {
  //save name in the  varibal
  const nameInput = prompt("Enter your name:");
  //pull back name for Id'name'
  const nameElement = document.getElementById("name");
  nameElement.textContent = nameInput;
});
// get DOM element
document.getElementById("btn-start").addEventListener("click", () => {
  // Add style 'display none' hide  start section

  document.getElementById("topsection").style.display = "none";
  // display question section
  document.getElementById("quiz-section").style.display = "block";
  //show question
  startQuiz(); // Lunch quiz. Hav fun =)
});

// Submit button
document.getElementById("submit-btn").addEventListener("click", (event) => {
  event.preventDefault(); //Prevent the form from being sent
  const userAnswer = document.getElementById("answer-input").value;
  checkAnswer(userAnswer);
});

//Function to start a quiz
let totalScore = 0; // Variable to store the total score of a player
let currentQuestionIndex = 0; // Current question index
let currentQuestionAttempts = 0; //Number of attempts for the current question

const startQuiz = () => {
  currentQuestionIndex = 0;
  totalScore = 0;
  showQuestion(currentQuestionIndex); //Displaying the first question
  // Getting DOM elements
  const questionElement = document.getElementById("question");
  const formElement = document.getElementById("answer-form");

  showQuestion(currentQuestionIndex); //Displaying the first question

  //Form send event handler
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    const userAnswer = document.getElementById("answer-input").value; // Getting the user's response from the input field
    checkAnswer(userAnswer, questions[currentQuestionIndex].answers); //Check the answer and increase the score if necessary
    currentQuestionIndex++; //Increase the index of the current question

    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex); //Display the following question
    } else {
      endQuiz(totalScore); //Completing the quiz
    }
  });

  // Clear the input field
  document.getElementById("answer-input").value = "";
};

// Function for displaying a question
const showQuestion = (questionIndex) => {
  const questionElement = document.getElementById("question");
  const question = questions[questionIndex].question; //
  questionElement.textContent = question; //
  //Reset attempts count for the current question
  // currentQuestionAttempts = 0;

  //Add check for last question
  if (questionIndex === questions.length - 1) {
    document.getElementById("submit-btn").style.display = "none"; //Finish quize hide submit button
    document.getElementById("finish-btn").style.display = "block";
  } else {
    document.getElementById("submit-btn").style.display = "block"; //Finish quize hide submit button
    document.getElementById("finish-btn").style.display = "none";
  }
};

const minRange = 1; //numbers of a given range
const maxRange = 10;

const checkAnswer = (userAnswer) => {
  const question = questions[currentQuestionIndex];
  const formattedUserAnswer = userAnswer.trim().toLowerCase(); // Lowercase the user's answer and remove the leading and trailing spaces

  const userNumber = parseFloat(formattedUserAnswer);
  const validationMessage = validateInput(
    formattedUserAnswer,
    minRange,
    maxRange
  );
  if (validationMessage) {
    alert(validationMessage);
    return;
  }

  if (formattedUserAnswer === "") {
    // Check emty placeholder
    alert("Please enter your answer.");
    return;
  }
    if (currentQuestionAttempts >= 3) {
      currentQuestionAttempts = 0;
      currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz(totalScore);
    }
    alert("Incorrect! You have exceeded the maximum attempts.");
    return;
  }

  //Checking if the user's answer is correct
  const isCorrect = question.answers.some((answer) => {
    if (typeof answer === "number") {
      return parseFloat(formattedUserAnswer) === answer; //Compare the user's numerical answer with the correct answer
    } else {
      return formattedUserAnswer === answer.toLowerCase(); //Compare the user's text response with the correct answer
    }
  });

  //Increase the player's score and move on to the next question, if the answer is correct
  if (isCorrect) {
    totalScore++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      currentQuestionAttempts = 0; // Reset attempts
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz(totalScore);
    }
    alert("Your answer is correct!"); // Display massege
  } else {
    currentQuestionAttempts++;
    alert("Incorrect answer. Please try again.");
  } //Increase the number of attempts for the current question



  //Clearing the input field
  document.getElementById("answer-input").value = "";
};

// empty array players result
const playerResults = [];
const playerList = [];
// Show result score
const endQuiz = (score) => {
  // Hide the quiz section
  document.getElementById("quiz-section").style.display = "none";

  // Clear the previous result element
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  // Calculate the score
  const totalQuestions = questions.length;
  const scoreMessage = `Your score: ${score}/${totalQuestions}`; // Message result

  // Create a new <p> element for the result
  const scoreElement = document.createElement("p");
  scoreElement.textContent = scoreMessage;

  const playerName = document.getElementById("name").textContent; // Get player's name
  const currentPlayerResult = {
    name: playerName,
    score: score, // If you need to add more information about players
  };

  // Show the Result button
  resultElement.appendChild(scoreElement);
  const showPlayerListBtn = document.getElementById("show-player-list-btn");
  showPlayerListBtn.style.display = "block";

  playerResults.push(currentPlayerResult);
  playerList = playerList.concat(playerResults);
};

// Show player list button click event
document
  .getElementById("show-player-list-btn")
  .addEventListener("click", () => {
    const playerListContainer = document.getElementById(
      "player-list-container"
    );
    // Show the player list container
    playerListContainer.style.display = "block";

    // Clear previous player list
    const playerListElement = document.getElementById("player-list");
    playerList.innerHTML = "";

    // Populate player list
    playerResults.forEach((player) => {
      const playerElement = document.createElement("p");
      playerElement.textContent = `Name: ${player.name}, Score: ${player.score}`;
      playerListElement.appendChild(playerElement);
    });
  });




