let rect = null, sx, sy;

//
artboard.addEventListener('mousedown', (e) => {
  // Find Position
  sx = e.offset.X / currentZoom;
  sy = e.offset.Y / currentZoom;

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
  
  const cx = e.offset.X / currentZoom;
  const cy = e.offset.Y / currentZoom;

  rect.setAttribute('width', Math.abs(cx - sx));
  rect.setAttribute('height', Math.abs(cy - sy));
  rect.setAttribute('x', Math.min(cx, sx));
  rect.setAttribute('y', Math.min(cy, sy));
});
  
window.addEventListener('mouseup', () => rect = null);
