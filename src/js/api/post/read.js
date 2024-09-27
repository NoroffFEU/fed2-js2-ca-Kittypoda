import { API_KEY } from "../constants";
import { API_SOCIAL_POSTS } from "../constants";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const token = localStorage.getItem('accessToken');  
    
    const url = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}${tag ? `&tag=${tag}` : ''}`;  

    const getData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
        "X-Noroff-API-Key": API_KEY,  
      },
    };

    const response = await fetch(url, getData);

    if (response.ok) {
      const json = await response.json(); 
      return json;
    } else {
      console.error(`Failed to fetch posts: ${response.statusText}`);
    }

  } catch (error) {
    console.error('Error fetching posts:', error); 
  }
}


export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
