import { readPosts } from "../../api/post/read";
console.log('readPosts')

export function generatePost(post){
  const postWrapper = document.createElement('div');
  postWrapper.classList.add('post-wrapper');

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  const heading = document.createElement('h2');
  heading.textContent = post.title;

  postContainer.appendChild(heading);
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


