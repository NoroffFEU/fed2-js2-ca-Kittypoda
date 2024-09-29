import { authGuard } from "../../utilities/authGuard";
import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants";

authGuard();


export function onUpdatePost() {

  
  
  document.addEventListener('DOMContentLoaded', () => {
    const editPostForm = document.getElementById('edit-post-form');

    if (!editPostForm) {
      console.error('Form element with id "edit-post-form" not found.');
      return;

    }
    
    const parameterString = window.location.search;
    const searchParams = new URLSearchParams(parameterString);
    const postId = searchParams.get('postId');

    if (!postId) {
      console.error('post ID not found in URL parameters.');
      return;
    }

    async function fetchPostData(postId) {
      try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            "X-Noroff-API-Key": API_KEY
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          return responseData.data;  
        } else {
          console.error('Failed to fetch post data:', response.statusText);
          return null;
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        return null;
      }
    }

    
    async function populateForm() {
      const postData = await fetchPostData(postId);
      if (postData) {
        document.getElementById('title').value = postData.title;
        document.getElementById('body').value = postData.body;
      } else {
        console.error('Failed to load post data for form population.');
      }
    }

  
    populateForm();

    
    editPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const body = document.getElementById('body').value;
      const token = localStorage.getItem('accessToken');

      if (!token) {
        alert('User is not authenticated.');
        console.error('No access token found in localStorage.');
        return;
      }

      const postData = {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": API_KEY
        },
      };

      try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`, postData);
        const json = await response.json();

        if (response.ok) {
          alert('Post updated!');
          window.location.href = '/';  
        } else {
          console.error('Failed to update post:', json);
          alert('Failed to update the post. Please try again.');
        }
      } catch (error) {
        console.error('Error updating post:', error);
        alert('Error updating the post. Please try again.');
      }
    });
  });
}
