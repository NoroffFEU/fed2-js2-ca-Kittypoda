
export function onLogout() {
  const logoutButton = document.getElementById('logout-button');
  
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userName');
      window.location.href = '/fed2-js2-ca-Kittypoda/auth/login/';
    });
  } else {
    console.error('Logout button not found!');
  }
}

onLogout();



