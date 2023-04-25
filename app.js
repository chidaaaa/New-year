const countdown = document.querySelector("#countdown");
const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");

const newYear = "01 jan 2024 00:00:00";

function updateCountdown() {
  const currentTime = new Date();
  const newYearTime = new Date(newYear);
  const diff = newYearTime - currentTime;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
