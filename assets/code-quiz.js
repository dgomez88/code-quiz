var count = 60;
var countDownTimer = document.getElementById("count");
var quizStartButton = document.getElementById("code-quiz-start-btn");
console.log(quizStartButton);

var questions = [
  {
    question: "Commonly used data type Do Not include:---",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within---",
    choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store:---",
    choices: [
      "numbers and strings",
      "others Arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within --- when being assigned to variables",
    choices: [
      "numbers and strings",
      "other Arrays",
      "booleances",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:---",
    choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
    answer: "console.log",
  },
];

quizStartButton.addEventListener("click",() {

}


