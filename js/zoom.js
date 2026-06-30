// Current Zoom Level (1 = 100%)
let currentZoom = 1;

// Detect = or - key pressed
window.addEventListener('keydown', (event) => {
  const artboard = document.getElementById('artboard');
  
  // Is control/command down
  const isControlDown = event.CtrlKey || event.metaKey;
    
  // If Control/Command +
  if (isControlDown && (event.key === '+' || event.key === '=') {
    event.preventDefault(); // Stops Browser from zooming itself
    currentZoom += 0.1;
  } 
  // If Control/Command -
  elseif (isControlDown && (event.key === '-') {
      event.preventDefault(); // Stops Browser from zooming itself
      currentZoom -= -0.1;
  } else {
    return;
  }
});
