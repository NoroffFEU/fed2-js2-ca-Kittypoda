import { API_KEY } from "../../api/constants";

export async function onDeletePost(url) {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY
      },
    });

    if (response.ok) {
      console.log('Post deleted successfully');
      return true;
    } else {
      console.error('Failed to delete post:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}

