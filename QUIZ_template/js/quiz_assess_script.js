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

  // showQuestion(currentQuestionIndex); //Displaying the first question
  // Clear the input field
  document.getElementById("answer-input").value = "";
};

//
const showQuestion = (questionIndex) => {
  const questionElement = document.getElementById("question");
  const question = questions[questionIndex].question; //
  questionElement.textContent = question; //
  //Reset attempts count for the current question
  currentQuestionAttempts = 0;
};

// Function for displaying a question
const checkAnswer = (userAnswer) => {
  const question = questions[currentQuestionIndex];
  const formattedUserAnswer = userAnswer.trim().toLowerCase(); // Lowercase the user's answer and remove the leading and trailing spaces

  // Проверяем, правильный ли ответ у пользователя
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
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz(totalScore);
    }
  } else {
    currentQuestionAttempts++; //Increase the number of attempts for the current question

    //Check the maximum number of attempts (3)
    if (currentQuestionAttempts >= 3) {
      currentQuestionIndex++; // Go next question
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        endQuiz(totalScore);
      }
    } else {
      // Message incorrect answer
      alert("Incorrect answer. Please try again.");
    }
  }

  //Clearing the input field
  document.getElementById("answer-input").value = "";
};
