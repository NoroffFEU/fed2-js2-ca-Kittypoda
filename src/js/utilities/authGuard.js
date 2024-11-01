
export function authGuard() {
  const token = localStorage.getItem('accessToken');  

  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "./fed2-js2-ca-Kittypoda/auth/login/";  
  }
}