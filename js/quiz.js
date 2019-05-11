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

// ************ You don't need to change anything below this. *************//

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

// Calculates the passing score
var passing = quiz.length * (passingPercentage / 100) ;

// Shortcut method for printing out messages
function print(message) {
  document.write(message);
}

// Gives the messages for pass or fail
var passingScore = function() {
  if (correctCount === quiz.length) {
    print('<span class=\'green\'>Congratulations! You received a perfect score!</span>');
  }
  else if (correctCount >= Math.round(passing)) {
    print('<span class=\'green\'>Congratulations! You passed this quiz!</span>');
  } else {
    print('<span class=\'red\'>Sorry, you failed to pass this quiz!</span>');
  }
}

// Loops through question and temporarily stores it as user input and pushes it to the array
for (var i = 0; i < quiz.length; i += 1) {  
  userInput = prompt(quiz[i]['question']);
  userAnswerList.push(userInput);
}

// Checks the user's answer against ours
for (var j = 0; j < quiz.length; j += 1) {
  if (userAnswerList[j] === quiz[j]['answer'].toString()) {
    validateCorrect.push(true);
  } else {
    validateCorrect.push(false);
  }
}

// Counts how many correct answers given
for (var k = 0; k < validateCorrect.length; k += 1) {
  if (validateCorrect[k] === true) {
      correctCount ++;
  }
}

// Print out question and user answer
for (var l = 0; l < quiz.length; l++){
  htmlList += '<li> ' + quiz[l]['question'] + ' Your aswer: ' + userAnswerList[l] + (validateCorrect[l] === true ? ' <span class=\'green\'>(Correct)</span> ' : ' <span class=\'red\'>(Wrong)</span> ') + '</li><br/>';
}

// Showtime
print(htmlList += '</ol>');
print("You answered " + correctCount + " questions correctly.");
print("<br/>");
passingScore();

