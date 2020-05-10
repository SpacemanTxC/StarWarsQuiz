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
    //push values first before if statement
      answerChoices.push()
    //button needs to be called
    // use timer to check time if 0 then prints out times up
    if(answerChoices.length != 2) {
       alert("You Didn't Finish! Try Again Padiwan");
    }else if(answerChoices.length == 2){
        alert("TEST Win");
        // let firstAnswer = an1;
        // let secondAnswer = an2;
        // let thirdAnswer = an3;
        // answerChoices.push(firstAnswer, secondAnswer, thirdAnswer)
        // create if else statement to check each answer
    }
};

// create three questions: first one is mult choice, sec is select boxes, third is input box
starWarsQuiz =`
  <p id= 'timer'>Timer</p>
  <div id='questions'>

          <h3>Where was did Luke Skywalker Grow Up?</h3>
          <form id="Q1">
              <input type="radio" name="Q1" value="Hoth"><label>Hoth</label>
              <input type="radio" name="Q1" value="Tatooine"><label>Tatooine</label>
              <input type="radio" name="Q1" value="Endor"><label>Endor</label>
          </form>

          <h3>What planet did the Death Star blow up?</h3>
          <form id="Q2">
              <input type="radio" name="Q2" value="Exogal"><label>Exogal</label>
              <input type="radio" name="Q2" value="Yavin 4"><label>Yavin 4</label>
              <input type="radio" name="Q2" value="Aldreaan"><label>Aldreaan</label>
          </form>

          <h3>What year did Star War first come out?</h3>
          <form id="Q3">
              <input type="text" name="Q3"><label>Enter Text Here</label>
          </form>  <br/>
    <button onclick="endButton()">Finish Quiz</button>
  </div>
`;

// creating ratio buttons
// <form>
// <input type="ratio" id="Hoth" name="birthPlanet" value="Hoth">
// </form>
