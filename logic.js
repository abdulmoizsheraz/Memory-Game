// Define an array of symbols to show
const symbolsToShow = ["X", "0", "/", "*", "+", "%", "$", "#"];
let child=document.getElementsByClassName('child')
// Define a function to randomize the order of an array
const randomizedSymbols = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let firstElement = null;
let secondElement = null;


  let array = randomizedSymbols(symbolsToShow);
  for (let i = 0; i < 8; i++) {
    child[i].innerText = array[i];
  }
  array = randomizedSymbols(symbolsToShow);
  for (let i = 8; i < child.length; i++) {
    child[i].innerText = array[i - 8];
// Add event listeners to all elements
  }
  const handleClick =(i)=>{
let child=document.getElementsByClassName('child')
child[i].classList.add("show")
if (firstElement === null ) {
  firstElement = child[i];
} else {
  secondElement = child[i];
  checkMatch(firstElement, secondElement);

}

  }

  const checkMatch = (first, second) => {
    let score=0;
let scorecard=document.getElementById("Scorecard");
    if (first.innerText === second.innerText) {
      first.classList.add("show");
      second.classList.add("show");
      score++;
    } else {
      setTimeout(() => {
        first.classList.remove("show");
        second.classList.remove("show");
      }, 1000);
    }
    scorecard.innerHTML = `<p>Score:${score}</p>`
    firstElement=null;
secondElement=null;
  }

const childElements = document.getElementsByClassName('child');
for (let i = 0; i < childElements.length; i++) {
  childElements[i].addEventListener("click", ()=>handleClick(i));
}
let timeLeft = 30;
    let timerId;

    function startTimer() {
      // Start the timer by calling the updateTimer function every second
      timerId = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      // Decrement the time left and update the timer display
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;

      // If the timer reaches 0, stop the timer and display a message
      if (timeLeft <= 0) {
        clearInterval(timerId);
        document.getElementById("timer").textContent = "Time's up!";
        setTimeout(() => {
          location.reload();
        }, 500); // Wait for 1 second before reloading the page
      }
    }
    







