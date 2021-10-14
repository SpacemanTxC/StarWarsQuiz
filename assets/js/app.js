//var store number correct/incorrect and quiz layout
let starWarsQuiz;
let correct = 0;
let inCorrect = 0;
//quiz answers
let questions = ["Tatooine", "Alderaan", "1977"];
// store answers
let answerChoices= [];

// Function to start quiz and timer
$("#startButton").click(function(){
  runStartButton();
});

// New html for main wrapper that adds quiz questions
starWarsQuiz =`
<div class="row timerSuper">
  <div class="col-12">
    <p id= 'timer'>Timer</p>
  </div>
</div>
<div class="row quizSuper">
  <div class="col-12" id ="questions">
        <h2>Where did Luke Skywalker Grow Up?</h2><br/>
        <form id="Q1">
            <input type="radio" name="Q1"  id="Hoth" value="Hoth" /><label>Hoth</label>
            <input type="radio" name="Q1"  id="Tatooine" value="Tatooine" /><label>Tatooine</label>
            <input type="radio" name="Q1"  id="Endor" value="Endor" /><label>Endor</label>
        </form><br/>
        <h2>What planet did the Death Star blow up?</h2><br/>
        <form id="Q2">
            <input type="radio" name="Q2"  id="Q2" value="Exogal" /><label>Exogal</label>
            <input type="radio" name="Q2"  id="Q2" value="Yavin 4" /><label>Yavin 4</label>
            <input type="radio" name="Q2"  id="Q2" value="Alderaan" /><label>Alderaan</label>
        </form><br/>
        <h2>What year did Star War first come out?</h2><br/>
        <form id="Q3">
            <input type="text" name="Q3" id="Q3" /><label>Enter Text Here</label>
        </form> <br/>
      </div>
  </div>
<div class="row finishButtonSuper">
  <div class="col-12">
    <button onclick="addValues()">Finish Quiz</button>
  </div>
`;
//Start function
function runStartButton(){
  // places html into quiz
  $('#mainWrapper').html(starWarsQuiz);
  startTimerButton();
 }

// Timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          // Alert for times up
            alert("Times up");
        }
    }, 1000);
};

//Function Start TimerButton
let startTimerButton = function() {
    let tenMinutes = 60 * 10
    display = document.querySelector('#timer');
    startTimer(tenMinutes, display);
};

//Add values
function addValues(){
    let value1 = $('input[type=radio][name="Q1"]:checked').val();
    let value2 = $('input[type=radio][name="Q2"]:checked').val();
    let value3 = $('input[name="Q3"]').val();
    // store global
   answerChoices =[value1, value2, value3 ];
   // Call check answers
    checkAnswers();
};

// compares values of both arrays
function checkAnswers(){
     for(i = 0; i < 3; i++){
        if(answerChoices[i] == questions[i]){
          correct++
        }else{
          inCorrect--
        }
     }
     //call submit function
     submit();
}

function submit(){
    $('#mainWrapper').html(starWarsSubmit);
    // var to store correct and incorrect
    let finalScoreCorr = correct;
    let finalScoreInCorr = inCorrect;
    // shows number correct and incorrect
    $('#finalScoreCorr').html(finalScoreCorr);
    $('#finalScoreInCorr').html(finalScoreInCorr);
  }

// final changes to quiz
let starWarsSubmit = `
<div class="row answerSuper">
  <div class="col-12">
    <div id = "submit">
      <h2>Number Correct: <p id= finalScoreCorr></p> </h2>
      <h2>Number Incorrect <p id= finalScoreInCorr></p> </h2>
      <button onclick="tryAgainButton()">Try Again</button>
    </div>
  </div>
</div>
`;
  // reload homepage
function tryAgainButton(){
  location.reload();
}
