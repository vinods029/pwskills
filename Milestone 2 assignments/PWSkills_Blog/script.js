
const addBlogButton = document.getElementById("addBlogButton");
const closeModel = document.getElementById("closeModel");
const addBlogModal = document.getElementById("addBlogModal");
const blogForm = document.getElementById("blogForm");
const blogImageFile = document.getElementById("blogImage");
const submitBlogButton = document.getElementById("submitBlogButton");
const BlogList = document.getElementById("BlogList");

const blogPosts = [];

// Function to render Blog
function renderBlogPosts() {
  BlogList.innerHTML = "";

  blogPosts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("blog-post");

    if (post.image) {
      const postImage = document.createElement("img");
      postImage.src = URL.createObjectURL(post.image);
      postDiv.appendChild(postImage);
    }

    const postTitle = document.createElement("h2");
    postTitle.classList.add("truncate");
    postTitle.textContent = post.title;

    const postDescription = document.createElement("p");
    postDescription.classList.add("truncate");
    postDescription.textContent = post.description;

    
    const postShowButton = document.createElement("button");
    postShowButton.textContent = "Read";

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postDescription);
    postDiv.appendChild(postShowButton);

    BlogList.appendChild(postDiv);
  });
}

// Open the modal when + is clicked
addBlogButton.addEventListener("click", () => {
  addBlogModal.style.display = "block";
});

// Close modal with x sign

closeModel.addEventListener("click", () => {
  addBlogModal.style.display = "none";
});

//Handle form submission


submitBlogButton.addEventListener("click", () => {
  const url = document.getElementById("blogUrl").value;
  const title = document.getElementById("blogTitle").value;
  const description = document.getElementById("blogDescription").value;
  const write = document.getElementById("blogWrite").value;
  const imageFile = blogImageFile.files[0];

  const blogPost = {
    url,
    title,
    description,
    write,
    image: imageFile,
  };

  // adding posts in the array

  blogPosts.push(blogPost);

  // randerings blogs in the homepage
  renderBlogPosts();

  // close form after submission
  addBlogModal.style.display = "none";

  // clearing for next entry
  blogForm.reset();

  
});
