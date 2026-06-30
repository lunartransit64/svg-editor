// For sizing and moving the artboard

// Variables
const artboard = document.getElementById('artboard');
const widthValue = document.getElementById('artboard-width');
const heightValue = document.getElementById('artboard-height');

// Update Width
width.addEventListener('input', () => {
  artboard.setAttribute('width', widthValue.value);
});

// Update Height
width.addEventListener('input', () => {
  artboard.setAttribute('width', heightValue.value);
});
