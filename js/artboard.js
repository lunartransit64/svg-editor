// For sizing and moving the artboard

// Variables
const artboard = document.getElementById('artboard');
const widthValue = document.getElementById('artboard-width');
const heightValue = document.getElementById('artboard-height');

// Update Width
widthValue.addEventListener('input', () => {
  artboard.setAttribute('width', widthValue.value);
});

// Update Height
heightValue.addEventListener('input', () => {
  artboard.setAttribute('height', heightValue.value);
});
