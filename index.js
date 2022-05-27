var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("what's your name? ");

console.log("welcome : " + userName + "  -Do you know jatin?");
console.log("-----------")


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;

  }
  else {
    console.log("you are wrong ");
  }
  console.log("current score:= " + score);
  console.log("--------------------")
}

var question = [
  {
  question: "where do i live? ",
  answer: "bharatpur"
},
  {
  question: "My favorite superhero would be?",
  answer: "ironman"
},{
    question: "What is my hobby?\n",

    answer: "basketball",
  },
  {
    question: "What is my favourite food?\n",

    answer: "pav bhaji",
  },
  {
    question: "What is my favourite colour?\n",

    answer: "black",
  },
];


for(var i=0;i<question.length;i++)
  {
    var currentQuestion =question[i];
    play(currentQuestion.question , currentQuestion.answer)
  }
console.log("thank you for coming........! " +userName);
