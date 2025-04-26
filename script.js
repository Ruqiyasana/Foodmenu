const buttons = document.querySelectorAll('.menu-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
  });
});
