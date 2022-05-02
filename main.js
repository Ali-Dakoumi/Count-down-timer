const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newyear = "1 Jan 2023";
  const newyeardate = new Date(newyear); // format the string to a date so you can subtractact the 2 variables later
  const current = new Date();

  const distance = newyeardate - current;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = addzero(hours);
  minEl.innerHTML = addzero(minutes);
  secondsEl.innerHTML = addzero(seconds);

  function addzero(time) {
    //     if (time < 10) {
    //       return `0${time}`;
    //     }
    //     return time;
    //   }

    return time < 10 ? `0${time}` : time;
  }
}
setInterval(() => {
  countdown();
}, 1000);
