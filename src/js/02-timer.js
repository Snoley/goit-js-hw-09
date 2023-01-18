import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

flatpickr(datetimePicker, {
  enableTime: true,
  onClose: function(selectedDates) {
    let selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      endDate = selectedDate;
      startButton.disabled = false;
    }
  }
});

let endDate;

startButton.addEventListener('click', function() {

  setInterval(function() {
    let currentTime = new Date();

    let timeRemaining = endDate - currentTime;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysField.innerHTML = days;
    hoursField.innerHTML = hours;
    minutesField.innerHTML = minutes;
    secondsField.innerHTML = seconds;
  }, 1000);
});

