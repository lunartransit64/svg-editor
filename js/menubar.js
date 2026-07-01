document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    // Reset
    document.querySelectorAll('tab-btn').forEach(button => btn.classList.remove('active'));
    document.querySelectorAll('navbar-tab').forEach(button => btn.classList.remove('active'));

    // Assign Current Clicked item to make it active
    button.classList.add('active');

    // Update Navbar
    const targetId = button.dataset.target;
    document.getElementById(targetId).classList.add('active');
  }
});
