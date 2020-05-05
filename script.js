let secondhand = document.querySelector(".seconds-hand");
let minshand = document.querySelector(".min-hand");
let hourhand = document.querySelector(".hour-hand");
function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsdegrees = (seconds / 60) * 360 + 90;
  secondhand.style.transform = `rotate(${secondsdegrees}deg)`;
  let mins = now.getMinutes();
  let minsdegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minshand.style.transform = `rotate(${minsdegrees}deg)`;
  let hour = now.getHours();
  let hourdegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourhand.style.transform = `rotate(${hourdegrees}deg)`;
}
setInterval(setDate, 1000); //per far muovere la lancetta ogni secondo//
setDate();
