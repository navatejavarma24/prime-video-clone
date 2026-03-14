
const toggleButton = document.getElementById('theme-toggle-button');




toggleButton.addEventListener('click', function() {
  
  document.body.classList.toggle('dark-mode');
  
  
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Toggle light mode';
    toggleButton.setAttribute('aria-label', 'Toggle light mode');
  } else {
    toggleButton.textContent = 'Toggle dark mode';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  }
});

