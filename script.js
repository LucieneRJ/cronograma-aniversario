const day18 = document.getElementById("day");
const hour23 = document.getElementById("hour");
const min28 = document.getElementById("min");
const sec33 = document.getElementById("sec");

const newYears = "1 Jan 2023";

function cronometro(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  day18.innerHTML = days;
  hour23.innerHTML = formatTime(hours);
  min28.innerHTML = formatTime(minutes);
  sec33.innerHTML = formatTime(seconds);

};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;

}


cronometro();

setInterval(cronometro, 1000);