// Current Zoom Level (1 = 100%)
let currentZoom = 1;

// Detect = or - key pressed
window.addEventListener('keydown', (event) => {
  const artboard = document.getElementById('artboard');
  
  // Is control/command down
  const isControlDown = event.ctrlKey || event.metaKey;
    
  // If Control/Command +
  if (isControlDown && (event.key === '+' || event.key === '=')) {
    event.preventDefault(); // Stops Browser from zooming itself
    currentZoom += 0.1;
  } 
  // If Control/Command -
  else if (isControlDown && (event.key === '-')) {
      event.preventDefault(); // Stops Browser from zooming itself
      currentZoom -= 0.1;
  } else {
    return;
  }

  // Limit the zoom amount
  if (currentZoom < 0.1) currentZoom = 0.1;
  if (currentZoom > 10) currentZoom = 10;

  // Update Artboard Render
  if (typeof updateArtboardRender === 'function') {
    updateArtboardRender();
  }

  // Update Zoom Text at bottom of page
  const ZoomPercent = Math.round(currentZoom * 100);
  document.querySelector('.zoom-num').textContent = ZoomPercent;
});
