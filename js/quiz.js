// The percentage needed to pass this quiz. Change this to whatever passing percentage you want.
var passingPercentage = 70; 

// Quiz questions and its respective answers. You can add more to the below list of questions and answers.
var quiz = [
  {
    question: 'How much is 35 + 35?',
    answer: 70
  },
  {
    question: 'What is the capital of Russia?',
    answer: 'Moscow'
  },
  {
    question: 'What year did Magellan discover the Philippines?',
    answer: 1521
  },
  {
    question: 'Full name of inventor of the telephone?',
    answer: 'Alexander Graham Bell'
  }
];

// ************ YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE *************//

// Stores users answers
var userAnswerList = [];
// Used for storing temporary user inputs to be passed to userAnswerList
var userInput;
// Stores boolean values of correct answers
var validateCorrect = [];
// Stores how many correct answers were given
var correctCount = 0;
// Stores all the items for printing
var htmlList = '<ol>';
var itemsVerbage;

// Calculates the passing score
var passing = quiz.length * (passingPercentage / 100) ;

// Loops through question and temporarily stores it as user input and pushes it to the array
for (var i = 0; i < quiz.length; i += 1) {  
  userInput = prompt(quiz[i]['question']);
  userAnswerList.push(userInput);
  if (userAnswerList[i] === quiz[i]['answer'].toString()) {
    validateCorrect.push(true);
  } else {
    validateCorrect.push(false);
  }
  if (validateCorrect[i] === true) {
    correctCount ++;
  }
  htmlList += '<li> ' + quiz[i]['question'] + ' Your aswer: ' + userAnswerList[i] + (validateCorrect[i] === true ? ' <span class=\'green\'>(Correct)</span> ' : ' <span class=\'red\'>(Wrong)</span> ') + '</li><br/>';
}

// Gives the messages for pass or fail
var passingScore = function() {
  itemsVerbage = htmlList += "</ol>" + "You answered " + correctCount + " questions correctly." + "<br/>"
  if (correctCount === quiz.length) {
    print(itemsVerbage + '<span class=\'green\'>Congratulations! You received a perfect score!</span>');
  }
  else if (correctCount >= Math.round(passing)) {
    print(itemsVerbage + '<span class=\'green\'>Congratulations! You passed this quiz!</span>');
  } else {
    print(itemsVerbage + "<br/>" + '<span class=\'red\'>Sorry, you failed to pass this quiz!</span>');
  }
}

// Prints out everything to index.html
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

// Showtime
passingScore();
