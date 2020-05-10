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
// empyt array to store answer choices from user
let answerChoices= [];

// the click function to start the quiz
document.getElementById("startButton").onclick = function() {
  runStartButton();

}

//working button from project
function runStartButton(){
  //document.getElementById("startButton").innerHTML = "Welcome to the Star Wars Quiz";
  console.log("Button Worked ");
  // use main wrapper to replace the questions
  document.getElementById('mainWrapper').innerHTML = starWarsQuiz;

  startTimerButton();

  //TEST
  console.log("Correct: " + correct + "InCorrect: " + inCorrect);
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
          // alert for times up
            alert("Times up");
        }
    }, 1000);
};

// button starts the timers
let startTimerButton = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(tenMinutes, display);

};

//check answer
//WORKING HERE!!!
// function checkAnswers(){
//   if(getElementById('Q1') == "Tatooine" && getElementById('Q2') == "Alderan" && getElementById('Q3') == "1977" ){
//     correct = 3;
//     inCorrect = 0;
//   }else if(getElementById('Q1') == "Tatooine" && getElementById('Q2') == "Alderan" && getElementById('Q3') == "1977" ){
//     inCorrect++;
//   }
// };

//Store the values in the new array when the submit button is pushed
//Check to make sure that all answers are clicked
// create a new button fuction for the finshed of the test
function endButton(){
    console.log("Test for end quiz");
    //button needs to be called
    // use timer to check time if 0 then prints out times up
    if(answerChoices.length != 2) {
       alert("You Didn't Finish! Try Again Padiwan");
    }else if(answerChoices.length == 2){
        alert("TEST Win");
    }
};

// create three questions: first one is mult choice, sec is select boxes, third is input box
starWarsQuiz =`
  <p id= 'timer'>Timer</p>
  <div id='questions'>
    <div id='Q1'>Where was did Luke Skywalker Grow Up</div>
      <form>
        <input type="radio" id="Hoth" name="birthPlanet" value="Hoth">
        <label for"Hoth">Hoth</label>
        <input type="radio" id="Tatooine" name="birthPlanet" value="Tatooine">
        <label for"Tatooine">Tatooine</label>
        <input type="radio" id="Endor" name="birthPlanet" value="Endor">
        <label for"Endor">Endor</label>
      </form> <br/>
    <div id='Q2'>What Planet was first Destoried by the Death Star</div>
      <form>
        <input type="radio" id="Exogal" name="birthPlanet" value="Exogal">
        <label for"Exogal">Exogal</label>
        <input type="radio" id="Naboo" name="birthPlanet" value="Naboo">
        <label for"Naboo">Naboo</label>
        <input type="radio" id="Alderaan" name="birthPlanet" value="Alderaan">
        <label for"Alderaan">Alderaan</label>
      </form> <br/>
    <div id='Q3'>Type The Year of the First Star Wars Movie</div> <br/>
    <form>
      <input type="text" id="movieYear" name="movieYear">
      <label for="movieYear">: Answer Here</label>
    </form> <br/>
    <button onclick="endButton()">Finish Quiz</button>
  </div>
`;

// creating ratio buttons
// <form>
// <input type="ratio" id="Hoth" name="birthPlanet" value="Hoth">
// </form>
