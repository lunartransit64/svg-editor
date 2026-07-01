document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    // Reset Menubar
    document.querySelectorAll('.menubar-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Reset Navbar
    document.querySelectorAll('.navbar-tab').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Assign Current Clicked item to make it active
    button.classList.add('active');

    // Update Navbar
    const targetId = button.dataset.target;
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});
