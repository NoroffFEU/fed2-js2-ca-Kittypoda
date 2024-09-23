export function authGuard() {
  const token = JSON.parse(localStorage.getItem('accessToken'))
  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
