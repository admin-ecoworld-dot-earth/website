// EcoWorld Auth Nav Helper
// Include this script on any page with id="navAccount" to auto-switch Login/Account
(function () {
  const link = document.getElementById('navAccount');
  if (!link) return;

  const token = localStorage.getItem('ecoToken');
  const user = JSON.parse(localStorage.getItem('ecoUser') || 'null');

  if (token && user) {
    link.href = 'dashboard.html';
    link.innerHTML = '<i class="fas fa-user-circle"></i> ' + user.name.split(' ')[0];
    link.style.color = '#2e7d32';
    link.style.fontWeight = '600';
  } else {
    link.href = 'login.html';
    link.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
  }
})();
