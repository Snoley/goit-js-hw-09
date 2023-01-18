import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');


form.addEventListener('submit', promisesParameters);

function promisesParameters(e) {
  e.preventDefault();

  const formValue = e.currentTarget.elements;
  const values = {
    delay: Number(formValue.delay.value),
    step: Number(formValue.step.value),
    amount: Number(formValue.amount.value),
  };

  for (let i = 1; i <= values.amount; i += 1) {
    createPromise(i, values.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    values.delay = values.step + values.delay;
  }
}
