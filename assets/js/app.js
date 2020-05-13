// var that will store the correct and incorrect answers
// star wars quiz creates new html for the page
let starWarsQuiz;
let correct = 0;
let inCorrect = 0;
//questions anwsers for quiz
let questions = ["Tatooine", "Alderaan", "1977"];
// empyt array to store answer choices from user answers
let answerChoices= [];

// Function to start quiz and timer
document.getElementById("startButton").onclick = function() {
  runStartButton();
}

//working button from project
function runStartButton(){
  // Replaces html wiht Star Wars Quiz Questions
  document.getElementById('mainWrapper').innerHTML = starWarsQuiz;
  //Declair Timer
  startTimerButton();
 }


// Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
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

// Button starts the timers
let startTimerButton = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(tenMinutes, display);

};

//Add values
function addValues(){
    let value1 = document.querySelector('input[name="Q1"]:checked');
    let value2 = document.querySelector('input[name="Q2"]:checked');
    let value3 = document.querySelector('input[name="Q3"]');

    // store global
   answerChoices =[value1.value, value2.value, value3.value ]

    // console the hole values
    console.log(answerChoices);

    // console single value
    console.log(answerChoices[0]);

    console.log(questions)

    checkAnswers();
    console.log(correct);
    console.log(inCorrect);

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
     alert("Number Correct: " + correct  +" Number Incorrect: " + inCorrect);
     alert("Try again Padiwan");
}




// New html for main wrapper that adds quiz questions
starWarsQuiz =`
  <p id= 'timer'>Timer</p>
  <div id='questions'>

          <h3>Where did Luke Skywalker Grow Up?</h3>
          <form id="Q1">
              <input type="radio" name="Q1"  id="Hoth" value="Hoth" /><label>Hoth</label>
              <input type="radio" name="Q1"  id="Tatooine" value="Tatooine" /><label>Tatooine</label>
              <input type="radio" name="Q1"  id="Endor" value="Endor" /><label>Endor</label>
          </form>

          <h3>What planet did the Death Star blow up?</h3>
          <form id="Q2">
              <input type="radio" name="Q2"  id="Q2" value="Exogal" /><label>Exogal</label>
              <input type="radio" name="Q2"  id="Q2" value="Yavin 4" /><label>Yavin 4</label>
              <input type="radio" name="Q2"  id="Q2" value="Alderaan" /><label>Alderaan</label>
          </form>

          <h3>What year did Star War first come out?</h3>
          <form id="Q3">
              <input type="text" name="Q3" id="Q3" /><label>Enter Text Here</label>
          </form>  <br/>
    <button onclick="addValues()">Finish Quiz</button>
  </div>
`;
