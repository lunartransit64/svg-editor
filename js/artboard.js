// For sizing and moving the artboard

// Variables
const artboard = document.getElementById('artboard');
const widthValue = document.getElementById('artboard-width');
const heightValue = document.getElementById('artboard-height');

function updateArtboardRender() {
  const zoom = typeof currentZoom !== 'undefined' ? currentZoom : 1;
  // Find Width and Height Values
  const awidth = Number(artboard.getAttribute('width'));
  const aheight = Number(artboard.getAttribute('height'));

  // Change/Update View Box
  artboard.setAttribute('viewBox', `0 0 ${awidth} ${aheight}`);
  
  // Update Display Size
  artboard.style.width = `${awidth * zoom}px`;
  artboard.style.height = `${aheight * zoom}px`;
}
  
// Update Width
widthValue.addEventListener('input', () => {
  artboard.setAttribute('width', widthValue.value);
  updateArtboardRender();
});

// Update Height
heightValue.addEventListener('input', () => {
  artboard.setAttribute('height', heightValue.value);
  updateArtboardRender();
});
