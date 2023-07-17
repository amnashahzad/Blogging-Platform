// Sample data for blog posts (Replace this with real data from backend)
const blogPosts = [
    {
      title: "Cricket",
      content: "This is the content of the first blog post.",
      author: "John Doe",
      date: "2023-07-17"
    },
    {
      title: "Football",
      content: "This is the content of the first blog post.",
      author: "Jane Smith",
      date: "2023-07-18"
    },
    // Add more blog posts as needed
  ];
  
  // Function to display blog posts on the page
  function displayBlogPosts() {
    const postsContainer = document.querySelector(".posts");
  
    blogPosts.forEach(post => {
      const postElement = document.createElement("article");
      postElement.classList.add("post");
  
      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;
  
      const postContent = document.createElement("p");
      postContent.textContent = post.content;
  
      const postMeta = document.createElement("div");
      postMeta.classList.add("meta");
      postMeta.textContent = `Published by ${post.author} on ${post.date}`;
  
      postElement.appendChild(postTitle);
      postElement.appendChild(postContent);
      postElement.appendChild(postMeta);
  
      postsContainer.appendChild(postElement);
    });
  }
  
  // Call the displayBlogPosts function to render the blog posts on page load
  displayBlogPosts();
  