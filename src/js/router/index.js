// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/fed2-js2-ca-Kittypoda/":
      await import("./views/home.js");
     // await import("./views/posts.js");
      break;
    case "/fed2-js2-ca-Kittypoda/auth/":
      await import("./views/auth.js");
      break;
    case "/fed2-js2-ca-Kittypoda/auth/login/":
      await import("./views/login.js");
      break;
    case "/fed2-js2-ca-Kittypoda/auth/register/":
      await import("./views/register.js");
      break;
    case "/fed2-js2-ca-Kittypoda/post/":
      await import("./views/post.js");
      break;
    case "/fed2-js2-ca-Kittypoda/post/edit/":
      await import("./views/postEdit.js");
      break;
    case "/fed2-js2-ca-Kittypoda/post/create/":
      await import("./views/postCreate.js");
      break;
    case "/fed2-js2-ca-Kittypoda/profile/":
      await import("./views/profile.js");
      break;
   // case "/fed2-js2-ca-Kittypoda/":
   //   await import("./views/posts.js");
   //   break;
      default:
      await import("./views/notFound.js");
  }
}
