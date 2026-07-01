let activeHandle = null;
let startW, startH, startX, startY;

// All Handles get a mouse down event
document.querySelectorAll('.handle').forEach(handle => {
  handle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    activeHandle = handle;

    // Cache starting dimention values
    startW = Number(artboard.getAttribute('width'));
    startH = Number(artboard.getAttribute('height'));
    startX = e.clientX;
    startY = e.clientY;
  });
});

// Resize when moved
window.addEventListener('mousemove', (e) => {
  if (!activeHandle) return;

  const axis = activeHandle.dataset.Axis;
  const zoom = typeof currentZoom !== 'undefined' ? currentZoom : 1;

  // Cursor distance
  const dx = (e.clientX - startX) / zoom;
  const dy = (e.clientY - startY) / zoom;

  const widthInput = document.getElementById('widthValue');
  
  // Right Handles
  if (activeHandle.matches('.mr, .tr, .br')) {
    const newWidth = Math.max(50, startW + dx);
    artboard.setAttribute('width', newWidth);
    if (widthInput) widthInput.value = Math.round(newWidth);
  }
  
  // Left Handles
  if (activeHandle.matches('.ml, .tl, .bl')) {
    const newWidth = Math.max(50, startW - dx);
    artboard.setAttribute('width', newWidth);
    if (widthInput) widthInput.value = Math.round(newWidth);
  }

  updateArtboardRender();
});

// Stop when mouse up
window.addEventListener('mouseup', (e) => {
  activeHandle = null;
});
