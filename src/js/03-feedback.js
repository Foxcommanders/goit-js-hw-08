import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};

const inputName = refs.form.elements.name;
const inputMessage = refs.form.elements.message;
// =========================================

/* const data = {};

inputName.addEventListener('input', e => {
  const name = inputName.value;
  data.name = name;
  saveToLS('formData', data);
});

inputMessage.addEventListener('input', e => {
  const message = inputMessage.value;
  data.message = message;
  saveToLS('formData', data);
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('formData');
  e.target.reset();
});

function onLoad() {
  const formData = loadFromLS('formData') || {};

  data.name = formData.name;
  data.message = formData.message;

  console.log(data);
  inputName.value = data.name || 'Anonymys';
  inputMessage.value = data.message || 'Default';
}
onLoad();
 */
