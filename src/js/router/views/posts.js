import { API_SOCIAL_POSTS } from "../../api/constants";
import { readPosts } from "../../api/post/read";
import { onDeletePost } from "../../ui/post/delete";
console.log('readPosts')

export function generatePost(post){
  const postWrapper = document.createElement('div');
  postWrapper.classList.add('post-wrapper');

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  postContainer.classList.add('py-4')

  const postPageLink = document.createElement('a');
  postPageLink.href = '#';   

  postPageLink.addEventListener('click', (event) => {
    event.preventDefault();  
    const postId = post.id;
    const newLink = `/fed2-js2-ca-Kittypoda/post/?postId=${postId}`;
    window.location.assign(newLink);  
  });

  // Use the actual post author's name or default to "Anonymous"
  const authorName = post.author ? post.author.name : 'Oda';

  // Create a user text element with "authorName says"
  const userText = document.createElement('h2');
  userText.textContent = `${authorName} says..`;

  const heading = document.createElement('p');
  heading.textContent = post.body;

  heading.classList.add('mb-3')

  
  const editButton = document.createElement('a');
  editButton.textContent = 'Edit';
  editButton.href = `/fed2-js2-ca-Kittypoda//post/edit/?postId=${post.id}`; 

  editButton.classList.add(
    'bg-customLBeige',
    'text-sm',
    'text-customDark',
    'font-open',
    'border',
     'border-white',
    'mr-2',
    'py-1', 
    'px-5', 
    'rounded-md', 
    'shadow-xl',
    'hover:bg-gradientBlue',
    );

  
  const deleteButton = document.createElement('a');
  deleteButton.textContent = 'Delete';
  
  deleteButton.classList.add(
    'bg-customLBeige',
     'text-sm',
     'text-customDark',
     'border',
     'border-white',
     'font-open',
     'py-1', 
     'px-4', 
     'rounded-md', 
     'shadow-xl',
     'hover:bg-gradientBlue',
     );

  deleteButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const postId = post.id;
    const success = await onDeletePost(`${API_SOCIAL_POSTS}/${postId}`);
    if (success) {
      postWrapper.remove();
    }
  });

  postContainer.appendChild(userText)
  postContainer.appendChild(heading);
  postContainer.appendChild(postPageLink);
  postContainer.appendChild(editButton);
  postContainer.appendChild(deleteButton);
  postWrapper.appendChild(postContainer);

  return postWrapper;
}


function displayPosts(posts) {
  const displayPostsContainer = document.getElementById('display-posts');
  console.log(displayPostsContainer)
  
  if (!displayPostsContainer) {
    console.error("Container element for posts not found!");
    return;
  }

  displayPostsContainer.textContent = ''; 

  posts.forEach((post) => {
    const postHtml = generatePost(post);
    displayPostsContainer.appendChild(postHtml);
  });
}

async function renderHomePage(){
  const userName = localStorage.getItem('userName');
  if (userName) {
    const responseData = await readPosts();
    const posts = responseData.data;
    console.log(posts)
    displayPosts(posts);
  } else {
    console.error('No data received from the API');
  }

  }

renderHomePage(); 


