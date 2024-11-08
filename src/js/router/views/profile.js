import { authGuard } from "../../utilities/authGuard";

authGuard();

document.addEventListener('DOMContentLoaded', () => {
  displayProfile();
});

function displayProfile() {

  const username = localStorage.getItem('username') || 'Guest';
  const bio = localStorage.getItem('bio') || 'No bio available';

  const profileUsername = document.getElementById('profile-username');
  const profileBio = document.getElementById('profile-bio');

  if (profileUsername) profileUsername.textContent = username;
  if (profileBio) profileBio.textContent = bio;
}




