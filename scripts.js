// scripts.js
const errors = {
  emptyInput: 'Division not performed. Both values are required in inputs. Try again',
  negativeInput: 'Division not performed. Invalid number provided. Try again',
  notNumber: 'Something critical went wrong. Please reload the page',
};

const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (dividend === '' || divider === '') throw errors.emptyInput;
    if (dividend < 0 || divider < 0) throw errors.negativeInput;
    if (isNaN(dividend) || isNaN(divider)) throw errors.notNumber;

    result.innerText = Math.trunc(dividend / divider);
  } catch (error) {
    result.innerText = error;
    if (error === errors.negativeInput) console.error(new Error(error));
    if (error === errors.notNumber) {
      document.body.innerHTML = `<h1> ${error} <h1>`;
      console.error(new Error(error));
    }
  }
});
