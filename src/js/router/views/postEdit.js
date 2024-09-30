import { authGuard } from "../../utilities/authGuard";
import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants";

authGuard();



    const editPostForm = document.getElementById('edit-post-form');
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
      const parameterString = window.location.search;
      const searchParams = new URLSearchParams(parameterString);
      const postId = searchParams.get('postId');
      console.log(postId)
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

