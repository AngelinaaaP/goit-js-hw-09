const feedbackForm = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillFields = () => {
  const formFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formFromLS === null) {
    return;
  }
  formData = formFromLS;
  for (const key in formFromLS) {
    if (formFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = formFromLS[key];
    }
  }
};

fillFields();
const onFormInput = ev => {
  const fieldName = ev.target.name;
  const fieldValue = ev.target.value;

  formData[fieldName] = fieldValue.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const clearFormData = () => {
  formData.email = '';
  formData.message = '';
};
const onFormSubmit = ev => {
  if (formData.email && formData.message) {
    ev.preventDefault();
    console.log(formData);
    ev.target.reset();
    clearFormData();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Fill please all fields');
  }
};

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onFormSubmit);