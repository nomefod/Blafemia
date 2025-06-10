const dino = document.getElementById("dino");
const cacto = document.getElementById("cacto");

document.addEventListener("keydown", () => {
  if (!dino.classList.contains("pular")) {
    dino.classList.add("pular");
    setTimeout(() => {
      dino.classList.remove("pular");
    }, 500);
  }
});

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

  if (cactoLeft < 90 && cactoLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
    location.reload();
  }
}, 10);
