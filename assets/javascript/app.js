
var rightAns = ["1", "4", "3", "3", "4", "2", "1", "2", "4", "3"];
var guessCorrect = 0;
var guessIncorrect = 0;
var startGameClock = 45;

var intervalId;

var gameReset;


$("#start").on("click", run);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
};

function decrement() {
  startGameClock--;
  $("#start").html("<h2>" + startGameClock + "</h2>");
  if (startGameClock === 0) {
    clearInterval(intervalId);
    startGameClock = 45;
    $("#start").html("<h2>Game Over!</h2>");
    checkAnswers();
    postResults();
  }
};

$("#submit").on("click", function () {
  checkAnswers();
  postResults();
});

function checkAnswers() {
  var answers = $("input:checked");
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].value === rightAns[i]) {
      guessCorrect++;
    } else if (answers[i].value != rightAns[i]) {
      guessIncorrect++;
    }
  }
};

function postResults() {
  $("#correct-answers").text(guessCorrect);
  $("#wrong-answers").text(guessIncorrect);
};
