var quiz = [
  ['How much is 35 + 35?', 70],
  ['What is the capital of Russia?', 'Moscow'],
  ['What year did Magellan discover the Philippines?', 1521],
  ['Full name of inventor of the telephone?', 'Alexander Graham Bell']
];
var userAnswerList = [];
var userInput;
var validateCorrect = [];
var correctCount = 0;
var htmlList = '<ol>';

var passingScore = function(){
  var passing = quiz.length / 2;
  if (correctCount === quiz.length) {
    print('<span class=\'green\'>Congratulations! You received a perfect score!</span>');
  }
  else if (correctCount >= passing) {
    print('<span class=\'green\'>Congratulations! You passed the test!</span>');
  } else {
    print('<span class=\'red\'>Sorry, you failed to pass the test!</span>');
  }
}

function print(message) {
  document.write(message);
}

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

print(htmlList += '</ol>');
print("You answered " + correctCount + " questions correctly.");
print("<br/>");
passingScore();

