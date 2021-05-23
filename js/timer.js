const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 5, 5).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 5, 4).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (days < 10) {
    days = "0" + days;
  }

  // display
  document.getElementById("timer").innerHTML = `<div class="days"> 
  <div class="numbers"> ${days} </div>days</div> 
<div class="hours"> 
  <div class="numbers"> ${hours} </div>hours</div> 
<div class="minutes"> 
  <div class="numbers"> ${minutes} </div>minutes</div> 
<div class="seconds"> 
  <div class="numbers"> ${seconds} </div>seconds</div> 
</div>`;
}, 1000);
