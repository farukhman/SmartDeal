// TAB SWITCHING LOGIC (Bottom Nav)
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and tabs
    navButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Add active class to clicked button and target tab
    btn.classList.add('active');
    const targetTab = btn.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});

// DARK / LIGHT MODE TOGGLE LOGIC
const themeToggleBtn = document.getElementById('theme-toggle');
const modeToggleBtn = document.getElementById('mode-toggle-btn');

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

if(themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if(modeToggleBtn) modeToggleBtn.addEventListener('click', toggleTheme);
