/*export function authGuard() {

  const token = JSON.parse(localStorage.getItem('accessToken'))
  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
*/
export function authGuard() {
  const token = localStorage.getItem('accessToken');  // Get token as a plain string

  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";  // Redirect to login page if no token
  }
}