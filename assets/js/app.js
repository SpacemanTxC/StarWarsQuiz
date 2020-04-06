// the click function to start the quiz
document.getElementById("startButton").onclick = function() {
  runStartButton();

}

//workin button from project
function runStartButton(){
  document.getElementById("startButton").innerHTML = "Welcome to the Star Wars Quiz";
//console.log("Button Worked ");
  startTimerButton();
 }


// over all time for the quiz
//create timer for quiz
// Sample Timer
    // change sample time to not start over if the button has been pressed
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// button starts the timers
if (time )
let startTimerButton = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(tenMinutes, display);
};


// 10 questions for the quiz

  // need to have mult choice and req to move on to next question
