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
