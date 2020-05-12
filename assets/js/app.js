// var that will store the correct and incorrect answers
// star wars quiz creates new html for the page
let starWarsQuiz;
let correct = 0;
let inCorrect = 0;
//questions anwsers for quiz
let questions = [
  {questionOne:"Tatooine"},
  {questionTwo:"Alderaan"},
  {questionThree: 1977}
];
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
//FIXING ****************************************
function addValues(){
    let value1 = document.getElementById('Q1').value;
    let value2 = document.getElementById('Q2').value;
    let value3 = document.getElementById('Q3').value;

    answerChoices.push(value1);
    answerChoices.push(value2);
    answerChoices.push(value3);
    console.log(value1);


}
//Store the values in the new array when the submit button is pushed
//Check to make sure that all answers are clicked
// create a new button fuction for the finshed of the test
function endButton(){
    console.log("Test for end quiz");
    //Call addValues
    addValues();
    // Check Array length for finsihed quiz
    if(answerChoices.length <= 1) {
       alert("You Didn't Finish! Try Again Padiwan");
    }else if(answerChoices.length >= 2){
        alert("TEST Win");
        //********************************************************
        //Add Winning Statement with Score
    }
};

// New html for main wrapper that adds quiz questions
starWarsQuiz =`
  <p id= 'timer'>Timer</p>
  <div id='questions'>

          <h3>Where was did Luke Skywalker Grow Up?</h3>
          <form id="Q1">
              <input type="radio" name="birthPlanet"  id="Hoth" value="Hoth" /><label>Hoth</label>
              <input type="radio" name="birthPlanet"  id="Tatooine" value="Tatooine" /><label>Tatooine</label>
              <input type="radio" name="birthPlanet"  id="Endor" value="Endor" /><label>Endor</label>
          </form>

          <h3>What planet did the Death Star blow up?</h3>
          <form id="Q2">
              <input type="radio" name="Q2"  id="Q2" value="Exogal" /><label>Exogal</label>
              <input type="radio" name="Q2"  id="Q2" value="Yavin 4" /><label>Yavin 4</label>
              <input type="radio" name="Q2"  id="Q2" value="Aldreaan" /><label>Aldreaan</label>
          </form>

          <h3>What year did Star War first come out?</h3>
          <form id="Q3">
              <input type="text" name="Q3" id="Q3" /><label>Enter Text Here</label>
          </form>  <br/>
    <button onclick="endButton()">Finish Quiz</button>
  </div>
`;
