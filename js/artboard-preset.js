document.getElementById('artboard-presets').addEventListener('change', (e) => {
  const value = e.target.value;
  
  if (value === "custom") return;

  const [width, height] = value.split('x').map(Number);
  const artboard = document.getElementById('artboard');
  
  const widthInput = document.getElementById('artboard-width');
  const heightInput = document.getElementById('artboard-height');

  // Update Artboard size
  artboard.setAttribute('width', width);
  artboard.setAttribute('height', height);

  // Sync
  widthInput.value = width;
  heightInput.value = height;

  if (typeof updateArtboardRender === 'function') {
    updateArtboardRender();
  }
});
                                                          
