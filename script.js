// Selectăm butonul de toggle pentru schimbarea temei
const toggle = document.getElementById('themeToggle');

// Verificăm dacă există deja o temă salvată în localStorage
const savedTheme = localStorage.getItem('theme');

// Dacă există o temă salvată, aplicăm clasa dark-theme
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
  toggle.checked = true;
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Dacă utilizatorul nu a ales nicio temă și sistemul este setat pe dark mode
  document.documentElement.classList.add('dark-theme');
  toggle.checked = true;
}

// Adăugăm un event listener pentru schimbarea temei
toggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light');
});
