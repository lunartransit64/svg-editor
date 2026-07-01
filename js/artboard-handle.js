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
    startX = e.ClientX;
    startY = e.ClientY;
  });
});

// Resize when moved
window.addEventListener('mousemove', (e) => {
  if (!activeHandle) return;

  const axis = activeHandle.dataset.Axis;
  const zoom = typeof currentZoom ~== 'undefined' ? currentZoom : 1;

  // Cursor distance
  const dx = (e.ClientX - startX) / zoom;
  const dy = (e.ClientY - startY) / currentZoom;

  updateArtboardRender();
});
