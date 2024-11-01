import { API_AUTH_REGISTER } from "../../api/constants";
export async function onRegister(event) {
  event.preventDefault()
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
      name,
      email,
      password
    };
console.log(userData)
    try {
      const sendUserData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      };

      const response = await fetch (API_AUTH_REGISTER, sendUserData)
      const json = await response.json();
      console.log(json)
  
      return json;
    } catch (error) {
      alert('Registration failed')
      console.error('Registration failed:', error);
  
    } finally {    window.location.href = '/fed2-js2-ca-Kittypoda/auth/login/';}
  
    }
  















// her skal funksjonen være