const refs = {
  form: document.querySelector('.login-form'),
  formLabels: document.querySelectorAll('.login-form label'),
  formBtn: document.querySelector('.login-form button'),
};

refs.formBtn.classList.add('form-submit-btn');

refs.formLabels.forEach(label => {
  const input = label.querySelector('input');

  if (input) {
    input.classList.add('form-input');
    input.id = input.name;
    input.placeholder = `Enter your ${input.name}`;

    label.classList.add('form-label');
    label.setAttribute('for', input.name);
  }
});

const formContainer = document.createElement('div');
formContainer.classList.add('form-container');
refs.form.before(formContainer);
formContainer.append(refs.form);

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const { email, password } = refs.form.elements;
  const formInputs = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!formInputs.email || !formInputs.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formInputs);
  refs.form.reset();
}
