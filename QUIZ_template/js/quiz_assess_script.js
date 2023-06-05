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

// Show question
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

// Function for displaying a question

const minRange = 1; //numbers of a given range
const maxRange = 10;

const checkAnswer = (userAnswer) => {
  const question = questions[currentQuestionIndex];
  const formattedUserAnswer = userAnswer.trim().toLowerCase(); // Lowercase the user's answer and remove the leading and trailing spaces

  if (formattedUserAnswer === "") {
    // Check emty placeholder
    showFeedback("Please enter your answer.");
    return;
  }
  const userNumber = parseFloat(formattedUserAnswer);

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
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz(totalScore);
    }
    alert("Your answer is correct!"); // Display massege
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
      alert("Incorrect! You have exceeded the maximum attempts.");
    } else {
      // Message incorrect answer
      alert("Incorrect answer. Please try again.");
    }
  }

  //Clearing the input field
  document.getElementById("answer-input").value = "";
};

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

  // Append the score element to the result section
  resultElement.appendChild(scoreElement);
};
