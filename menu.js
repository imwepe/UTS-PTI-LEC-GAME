let timer = setInterval(() => {
  var makan = document.getElementById("makan");
  var tidur = document.getElementById("tidur");
  var maen = document.getElementById("maen");
  var obat = document.getElementById("obat");
  maen.value -= 10;
  tidur.value -= 10;
  makan.value -= 10;
  obat.value -= 5;

  if(makan.value == 0 || maen.value == 0 || tidur.value == 0 || obat.value == 0){
    alert("Game Over");
    if(confirm("Do you want to play again ?")){
        location.reload();
    }
    else{
        window.location.assign("index.html");
    }
  }  
}, 5000);

function makan() {
  var makan = document.getElementById("makan");
  var tidur = document.getElementById("tidur");
  var maen = document.getElementById("maen");
  var obat = document.getElementById("obat");
  makan.value += 20;
  tidur.value -= 5;
  maen.value -= 5;
  obat.value -= 10;
}

function tidur() {
  var makan = document.getElementById("makan");
  var tidur = document.getElementById("tidur");
  var maen = document.getElementById("maen");
  var obat = document.getElementById("obat");
  tidur.value += 30;
  makan.value -= 5;
  maen.value -= 10;
  obat.value += 5;
}

function maen() {
  var makan = document.getElementById("makan");
  var tidur = document.getElementById("tidur");
  var maen = document.getElementById("maen");
  var obat = document.getElementById("obat");
  maen.value += 25;
  tidur.value -= 10;
  makan.value -= 10;
  obat.value -= 5;
}

function obat() {
  var makan = document.getElementById("makan");
  var tidur = document.getElementById("tidur");
  var maen = document.getElementById("maen");
  var obat = document.getElementById("obat");
  maen.value -= 10;
  tidur.value -= 10;
  makan.value -= 10;
  obat.value += 30;
}


const display = document.querySelector(".display");

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const now = Date.now();
  elapsedTime = now - startTime;
  display.textContent = formatTime(elapsedTime);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00";
}

function formatTime(time) {
  //const ms = time % 1000;
  const s = Math.floor(time / 1000) % 60;
  const m = Math.floor(time / 60000) % 60;
  const h = Math.floor(time / 3600000);
  return `${pad(m)}:${pad(s)}`;
}

function pad(num, size = 2) {
  return num.toString().padStart(size, "0");
}

function startOnLoad() {
  startTimer();
}

window.addEventListener("load", startOnLoad);

function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var time = hours + ":" + minutes + ":" + seconds;
  var greeting = "";
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
    document.getElementById("bg").style.backgroundImage = "url(img/morning-sky.gif)";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
    document.getElementById("bg").style.backgroundImage = "url(img/afternoon-sky.gif)";
  } else {
    greeting = "Good Evening";
    document.getElementById("bg").style.backgroundImage = "url(img/stars-train.gif)";
  }
  document.getElementById("greeting").innerHTML = greeting;
  setTimeout(showTime, 1000);
}

    let level = 1;
		let levelElement = document.getElementById("level");

		setInterval(function() {
			level++;
      if (level >= 3){
        level = 3;
      }
			levelElement.innerHTML = "Level " + level;
		}, 1 * 60 * 1000);

// let userName = document.getElementById("name");
// if (userName === null || userName === "") {
//   userName = "Anonymous";
// }

// localStorage.setItem("userName", userName);
const petName = localStorage.getItem("user-pet");
const pet = document.getElementById("user-pet");
pet.textContent = userPetVal;