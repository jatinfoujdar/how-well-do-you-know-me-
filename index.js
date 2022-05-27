
var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

const useranswer = readlineSync.question("What is your name? ")

console.log(chalk.blue('Welcome %s'), useranswer);
const useranswer1 = readlineSync.question(chalk.green('Are you excited to play to game!! [y/n]'))

if (useranswer1 == 'y') {
  console.log(chalk.red("You are all set for the game...\n Please give all the answers in small case "))

  function play(question, answer) {
    var useranswer = readlineSync.question(question)

    if (useranswer.toLowerCase() == answer.toLowerCase()) {
      console.log(chalk.green.bgBlue.bold('Right'));
      score++;
    }

    else {
      console.log(chalk.red.bgBlue.bold('Wrong...'))
      score--;
    }
  }

  var questions = [{
    question: "Where Do Jatin Live\n",

    answer: "Bharatpur",
  },
  {
    question: "What is my hobby?\n",

    answer: "Basketball",
  },
  {
    question: "What is my favourite food?\n",

    answer: "pav bhaji",
  },
  {
    question: "What is my favourite colour?\n",

    answer: "black",
  },
  {
    question: "Tell the name of mine given by my friends\n",

    answer: "noone",
  },
  {
    question: "What is my favourite subject?\n",

    answer: "History",
  },
  ]

  for (i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer)
  }

  console.log(chalk.blue("Your Score is: " + score));


}
else {
  console.log(chalk.red('Thank You for Coming.....'))
}
