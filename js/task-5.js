function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorBtn: document.querySelector('.change-color'),
  changedColorEl: document.querySelector('.color'),
  bodyEl: document.body,
};

refs.colorBtn.addEventListener('click', handleColorBtnClick);

function handleColorBtnClick(e) {
  const randomColor = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = randomColor;
  refs.changedColorEl.textContent = `${randomColor}`;
}
