// Array with 5 simple questions

const questions = [
  {
    question: "What is the capital of UK?",
    answer: "London",
  },
  {
    question: "Which language is considered international ?",
    answer: "English",
  },
  {
    question: "A companion of the earth ?",
    answer: "Moon",
  },
  {
    question: "The largest animal on the planet ?",
    answer: "Whale",
  },
  {
    question: "What is the most popular flavor of ice cream in the world ?",
    answer: "vanilla",
  },
];

//   Create a function which generates questions from arrow

const getQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

// Export thit function in main fail js
// thereby reducing the code in the main file and improving the development

// test function
// const question = getQuestion();
// console.log(question);
