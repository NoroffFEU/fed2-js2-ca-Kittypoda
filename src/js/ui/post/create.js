import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants";

console.log(API_SOCIAL_POSTS)

export async function onCreatePost(event) {

event.preventDefault();

const title = document.getElementById('title').value;
const body = document.getElementById('text').value;

const token = localStorage.getItem('accessToken');

const postData = {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
  }),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    "X-Noroff-API-Key": API_KEY
  },
};

try {
  const response = await fetch (API_SOCIAL_POSTS, postData);
  const json = await response.json();

  console.log(json)

  if (response.ok){
    alert('Post successful');
  } else {
    alert(`Error: ${json.message || 'Something went wrong'}`);
  }
} catch (error) {
  alert(`Error: ${error.message || 'Something went wrong'}`);
}
  }
