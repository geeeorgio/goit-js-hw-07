const refs = {
  inputEl: document.getElementById('name-input'),
  inputTitle: document.querySelector('h1'),
  output: document.getElementById('name-output'),
};

refs.inputTitle.classList.add('input-title');

refs.inputEl.addEventListener('input', handleInputChange);

function handleInputChange(e) {
  const text = e.target.value.trim();
  refs.output.textContent = text || 'Anonymous';
}

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

inputContainer.append(refs.inputEl, refs.inputTitle);
document.body.append(inputContainer);
