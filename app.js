const daysEl = document.querySelector("#jours");
const hoursEl = document.querySelector("#heures");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#secondes");

const birthday = "12 March 2023";

function countdown(){
    const currentDay = new Date();
    const birthdayDate = new Date(birthday);

    const maxSeconds = (birthdayDate - currentDay) / 1000;

    const days =  Math.floor(maxSeconds / 3600 / 24);
    const hours =  Math.floor(maxSeconds / 3600) % 24;
    const minutes =  Math.floor(maxSeconds / 60) % 60
    const seconds =  Math.floor(maxSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown()

setInterval(countdown, 1000);