let rect = null, sx, sy;

//
artboard.addEventListener('mousedown', (e) => {
  // Get current artboard size for scaling
  const rectBoundaries = artboard.getBoundingClientRect();
  
  // Find Position
  sx = (e.clientX - rectBoundaries.left) / currentZoom;
  sy = (e.clientY - rectBoundaries.top) / currentZoom;

  // Create Rectangle
  rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', sx);
  rect.setAttribute('y', sy);
  rect.setAttribute('fill', '#000000');
  artboard.appendChild(rect);
});

// Drag/Resize Rectangle
artboard.addEventListener('mousemove', (e) => {
  if (!rect) return;

  // Get current artboard size for scaling
  const rectBoundaries = artboard.getBoundingClientRect();

  // Find Position
  const cx = (e.clientX - rectBoundaries.left) / currentZoom;
  const cy = (e.clientY - rectBoundaries.top) / currentZoom;

  rect.setAttribute('width', Math.abs(cx - sx));
  rect.setAttribute('height', Math.abs(cy - sy));
  rect.setAttribute('x', Math.min(cx, sx));
  rect.setAttribute('y', Math.min(cy, sy));
});
  
window.addEventListener('mouseup', () => rect = null);
