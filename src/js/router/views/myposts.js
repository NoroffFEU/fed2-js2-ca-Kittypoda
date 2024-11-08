import { API_SOCIAL_POSTS } from "../../api/constants";
import { readPostsByUser } from "../../api/post/read";
import { onDeletePost } from "../../ui/post/delete";

// Function to generate a single post element
export function generatePost(post) {
  const loggedInUsername = localStorage.getItem('username');
  const authorName = post.author ? post.author.name : 'Unknown';

  // If the post is not created by the logged-in user, skip rendering
  if (authorName !== loggedInUsername) {
    return null;
  }

  // Create post wrapper and container
  const postWrapper = document.createElement('div');
  postWrapper.classList.add('post-wrapper', 'mb-6', 'p-4', 'border', 'border-gray-200', 'rounded-lg', 'shadow-lg');

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container', 'py-4');

  // Create post link
  const postPageLink = document.createElement('a');
  postPageLink.href = '#';
  postPageLink.textContent = 'View Post';
  postPageLink.classList.add('text-blue-500', 'hover:underline');
  postPageLink.addEventListener('click', (event) => {
    event.preventDefault();
    const postId = post.id;
    const newLink = `/fed2-js2-ca-Kittypoda/post/?postId=${postId}`;
    window.location.assign(newLink);
  });

  // Create post elements
  const userText = document.createElement('h2');
  userText.textContent = `${authorName} says..`;
  userText.classList.add('font-bold', 'text-lg', 'mb-2');

  const heading = document.createElement('p');
  heading.textContent = post.body;
  heading.classList.add('mb-3');

  // Create Edit button
  const editButton = document.createElement('a');
  editButton.textContent = 'Edit';
  editButton.href = `/fed2-js2-ca-Kittypoda/post/edit/?postId=${post.id}`;
  editButton.classList.add(
    'bg-yellow-400',
    'text-sm',
    'text-black',
    'mr-2',
    'py-1',
    'px-4',
    'rounded-md',
    'shadow',
    'hover:bg-yellow-500'
  );

  // Create Delete button
  const deleteButton = document.createElement('a');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add(
    'bg-red-500',
    'text-sm',
    'text-white',
    'py-1',
    'px-4',
    'rounded-md',
    'shadow',
    'hover:bg-red-600'
  );

  // Delete button event listener
  deleteButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const postId = post.id;
    const success = await onDeletePost(`${API_SOCIAL_POSTS}/${postId}`);
    if (success) {
      postWrapper.remove();
    }
  });

  // Append elements to the post container
  postContainer.appendChild(userText);
  postContainer.appendChild(heading);
  postContainer.appendChild(postPageLink);
  postContainer.appendChild(editButton);
  postContainer.appendChild(deleteButton);
  postWrapper.appendChild(postContainer);

  return postWrapper;
}

// Function to fetch and display posts by the logged-in user
export async function displayUserPosts() {
  const username = localStorage.getItem('username');
  if (!username) {
    console.error('No username found in localStorage.');
    return;
  }

  const postsContainer = document.getElementById('my-posts-container');
  if (!postsContainer) {
    console.error('Posts container not found.');
    return;
  }

  const posts = await readPostsByUser(username);

  if (posts && Array.isArray(posts)) {
    postsContainer.innerHTML = ''; // Clear existing content
    posts.forEach((post) => {
      const postElement = generatePost(post);
      if (postElement) {
        postsContainer.appendChild(postElement);
      }
    });
  } else {
    console.error('No posts found for this user.');
  }
}

// Call the display function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayUserPosts);
