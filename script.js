const scriptURL = 'https://script.google.com/macros/s/AKfycbwBmaMdVTWutu4Vwli7AF4R1r-F_it8X8nwXvtBs3svtIi1frNy3kwDuysfl6V11-3ZUQ/exec'
const form = document.forms['registration-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Success!', response))
    .catch(error => alert('Error!', error.message))
    setTimeout(() => {
        form.reset();
      }, 5000);
    })