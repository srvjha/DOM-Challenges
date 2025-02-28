const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  if(body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  }
  else {
    body.classList.add('dark-mode');
  }
});
