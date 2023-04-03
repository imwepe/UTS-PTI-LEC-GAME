let playerName = localStorage.getItem("nama");

function showTime() {
  // Get the local time of the visitor
var localTime = new Date();
var localHour = localTime.getHours();
            
// Bool to determine if it is night or day
var isNight = ( 18 <= localHour || 8 >= localHour ) ? true : false;
            
// Object containing URL links to images 
const  backgroundURLs = {
    /*day: 'url(img/night.jpg)',
    night: 'url(img/day.jpg)',
};

// Sets the background image
const setBackground = (image) => {
  // wait for window to be loaded to ensure body is present, 
  // if you are checking this elsewhere you can remove the window.onload check
  window.onload = function() {
     document.body.style.background = 'url(img/day.jpg)';
  }
};
            
// Actually set the background based on the bool and URL object. 
if ( isNight ) {
  setBackground('night');
} else {
  setBackground('day');
}*/
  
  
 /* const now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var time = hours + ":" + minutes + ":" + seconds;

  var greeting = "";
  if (hours >= 5 && hours < 12) {
    greeting = "Good morning!" + playerName;
    document.getElementById("bg").style.backgroundImage = "url(img/day.jpg)";
    document.getElementsByClassName("rectangle").style.borderColor = "black";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon!" + playerName;
    document.getElementById("bg").style.backgroundImage = "url(img/noon.jpg)";
    document.getElementsByClassName("rectangle").style.borderColor = "black";
  } else {
    greeting = "Good evening!" + playerName;
    document.getElementById("bg").style.backgroundImage = "url(img/malam.jpg)";
    document.getElementsByClassName("rectangle").style.borderColor = "white";
  }
  document.getElementById("greeting").innerHTML = greeting;
  setTimeout(showTime, 1000);*/
}

// function levelUp() {
//   var level;
//   var minutes = date.getMinutes();
//   if (minutes > 5) {
//     level.value += 1;
//   } else if (minutes > 10) {
//     level.value += 1;
//   }
//   return level.value;
// }

function update() {
  // Check if it's time to level up
  elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime >= levelUpTime) {
    character.level++;
    startTime = new Date().getTime();
  }
}

/*let startTime = new Date().getHours();
const levelUpTime = 60 * 1000;

function drawLevel() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Level: " + character.level, 1, 3);
}
*/
/*var t = new Date().getHours();
if (t < 10) {
  document.write("Good morning!");
  document.body.style.backgroundColor = "url(img/day.jpg)";
} else if (t < 20) {
  document.write("Good afternoon!");
  document.body.style.backgroundColor = "url(img/noon.jpg)";
} else {
  document.write("Good evening!");
  document.body.style.backgroundColor = "url(img/malam.jpg)";
}*/
}
