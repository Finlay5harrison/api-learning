
async function loadPost(postId = 1) {
  const url =
    `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const post = await response.json();

    console.log("Post title:", post.title);
    console.log("Post body:", post.body);

  } catch (error) {
    console.error(
      "Could not load post:",
      error.message
    );
  }
}

loadPost();
