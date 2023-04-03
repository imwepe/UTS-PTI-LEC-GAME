// Get the canvas element and its 2D context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the game character
const character = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 5,
};

// Define the game star
const star = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: 5,
  color: "red",
};

// Define the score
let score = 0;

// Handle keyboard input
const keys = {};

document.addEventListener("keydown", function (event) {
  keys[event.keyCode] = true;
});

document.addEventListener("keyup", function (event) {
  keys[event.keyCode] = false;
});

// Draw the game character
function drawCharacter() {
  ctx.beginPath();
  ctx.arc(character.x, character.y, character.radius, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.closePath();
}

// Draw the game star
function drawStar() {
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  ctx.fillStyle = star.color;
  ctx.fill();
  ctx.closePath();
}

// Draw the score indicator
function drawScore() {
  ctx.font = "10px arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 5, 20);
}

function kiri() {
  character.x -= character.speed;
}
function kanan() {
  character.x += character.speed;
}
function atas() {
  character.y -= character.speed;
}
function bawah() {
  character.y += character.speed;
}

// Update the game state
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the distance between the character and the star
  const dx = star.x - character.x;
  const dy = star.y - character.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // If the character is within a certain distance of the star, move the star to a new random position and increase the score
  if (distance < character.radius + star.radius) {
    star.x = Math.random() * canvas.width;
    star.y = Math.random() * canvas.height;
    score++;
  }

  // Move the character based on arrow key input
  if (keys[37]) {
    kiri();
  }
  if (keys[38]) {
    // up arrow
    atas();
  }
  if (keys[39]) {
    // right arrow
    kanan();
  }
  if (keys[40]) {
    // down arrow
    bawah();
  }

  kiri();
  atas();
  kanan();
  bawah();

  // Draw the game objects and the score indicator
  drawCharacter();
  drawStar();
  drawScore();

  // Request the next animation frame
  requestAnimationFrame(update);
}

// Start the game loop
update();
