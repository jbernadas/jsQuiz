var quiz = [
  ['How much is 35 + 35?', 70],
  ['What is the capital of Russia?', 'Moscow'],
  ['What year did Magellan discover the Philippines?', 1521],
  ['Full name of inventor of the telephone?', 'Alexander Graham Bell'],
  ['When was the year the American Declaration of Independence signed?', 1721],
  ['Who sang Billie Jean?', 'Michael Jackson']
];

// The percentage needed to pass this quiz. Change this to whatever percentage you want.
var passingPercentage = 50; 

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

// Gives the messages for pass or fail
var passingScore = function() {
  if (correctCount === quiz.length) {
    print('<span class=\'green\'>Congratulations! You received a perfect score!</span>');
  }
  else if (correctCount >= Math.round(passing)) {
    print('<span class=\'green\'>Congratulations! You passed the test!</span>');
  } else {
    print('<span class=\'red\'>Sorry, you failed to pass the test!</span>');
  }
}

// Shortcut method for printing out messages
function print(message) {
  document.write(message);
}

// Loops through question and temporarily stores it as user input and pushes it to the array
for (var i = 0; i < quiz.length; i += 1) {  
  userInput = prompt(quiz[i][0]);
  userAnswerList.push(userInput);
}

// Checks the user's answer against ours
for (var j = 0; j < quiz.length; j += 1) {
  if (userAnswerList[j] === quiz[j][1].toString()) {
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
  htmlList += '<li> ' + quiz[l][0] + ' Your aswer: ' + userAnswerList[l] + (validateCorrect[l] === true ? ' <span class=\'green\'>(Correct)</span> ' : ' <span class=\'red\'>(Wrong)</span> ') + '</li><br/>';
}

// Showtime
print(htmlList += '</ol>');
print("You answered " + correctCount + " questions correctly.");
print("<br/>");
passingScore();

