import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const inputEmail = refs.form.elements.email;
const inputMessage = refs.form.elements.message;

let data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

refs.form.addEventListener('input', throttle(formInput), 500);
function formInput(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onLoad() {
  inputEmail.value = data.email || '';
  inputMessage.value = data.message || '';
}
onLoad();

refs.form.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  data = {};
}
