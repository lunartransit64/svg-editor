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

  // Width and Height
  const widthInput = document.getElementById('widthValue');
  const heightInput = document.getElementById('heightValue');
  
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

  // Bottom Handles
  if (activeHandle.matches('.bl, .bc, .br')) {
    const newHeight = Math.max(50, startH + dy);
    artboard.setAttribute('width', newHeight);
    if (heightInput) heightInput.value = Math.round(newHeight);
  }

  // Top Handles
  if (activeHandle.matches('.tl, .tc, .tr')) {
    const newHeight = Math.max(50, startH - dy);
    artboard.setAttribute('width', newHeight);
    if (heightInput) heightInput.value = Math.round(newHeight);
  }

  updateArtboardRender();
});

// Stop when mouse up
window.addEventListener('mouseup', (e) => {
  activeHandle = null;
});
