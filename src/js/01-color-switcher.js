let intervalId;
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.querySelector('body');

  startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  stopBtn.addEventListener('click', function() {
    startBtn.disabled = false;
    clearInterval(intervalId);
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
