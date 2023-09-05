const content_select = document.getElementById("content-blogs");

fetch("https://64c25bf6eb7fd5d6ebcfb379.mockapi.io/api/v1/blogs", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    render_blogs(data);
  })
  .catch((err) => {
    console.log(err);
  });

const convert_slug = (title, id) => {
  return title.toLowerCase().replaceAll(" ", "-").replace(".", "-") + id;
};
const render_blogs = (blogs) => {
  let stringHTML = "";
  for (let blog of blogs) {
    stringHTML += `
        <div class="post-preview">
            <a href="post.html?slug=${convert_slug(blog.title, blog.id)}">
             <h2 class="post-title">${blog.title}</h2>
             <h3 class="post-subtitle">${blog.description}</h3>
            </a>
        <p class="post-meta">
            Posted by
            <a href="#!">${blog.author}</a>
            on ${blog.creatAt}
        </p>
        </div>
        <hr class="my-4" />
        `;
  }
  content_select.innerHTML = stringHTML;
};
