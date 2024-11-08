import { readPost } from "../../api/post/read";


function generateSinglePost(onePost){
  const postWrapper = document.createElement('div');
  postWrapper.classList.add('one-post-wrapper');

  const postContainer = document.createElement('div');
  postContainer.classList.add('one-post-container');

  const heading = document.createElement('h1');
  heading.textContent = onePost.title;
 

  const body = document.createElement('p');
  body.textContent = onePost.body;


  postContainer.append(heading, body);
  postWrapper.appendChild(postContainer);

  return postWrapper;
}

function displaySinglePost(post) {
const displaySinglePostContainer = document.getElementById("display-one-post");
displaySinglePostContainer.textContent="";
const onePostHtml = generateSinglePost(post);
displaySinglePostContainer.appendChild(onePostHtml);
}

async function renderPage() {
  try {
    const parameterString = window.location.search;
    const searchParameter = new URLSearchParams(parameterString);
    const id = searchParameter.get("postId");

    const userName = localStorage.getItem('userName');

    const responseData = await readPost(`${id}`);
    if (responseData && responseData.data) {
      const post = responseData.data;
      displaySinglePost(post);
    } else {
      console.error("No data found in the API response.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  }
renderPage();