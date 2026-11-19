
// REST API Learning Example

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    console.log("Posts loaded:", posts.length);
    console.log(posts.slice(0, 5));

  } catch (error) {
    console.error("Failed to load posts:", error);
  }
}

async function createPost() {
  const newPost = {
    title: "Learning REST APIs",
    body: "This is a practice API request.",
    userId: 1
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    const result = await response.json();
    console.log("Created post:", result);

  } catch (error) {
    console.error("Request failed:", error);
  }
}

getPosts();
createPost();
