document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');

  // Aplicăm tema salvată
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    toggle.checked = true;
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark-theme');
    toggle.checked = true;
  }
  

  // Eveniment pentru schimbarea temei
  toggle.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light');
  });
});

// Script -ul pentru magazin
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Produsul a fost adaugat in cos!");
        });
    });
});