const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

addEventListener("keydown", (e) => {
  const name = e.code;
  if (name == "Space") {
    jump();
  }
});

const checkAlive = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Press Space to Retry Loser.");
  }
}, 10);

function restart() {
  block.style.animation = "block 1s infinite linear";
}

addEventListener("keydown", restart);
