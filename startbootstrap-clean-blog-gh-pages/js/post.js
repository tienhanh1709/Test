const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slug = urlParams.get("slug");
const arraySlug = slug.split("-");
const id = arraySlug[arraySlug.length - 1];

const headers_content = document.getElementById("heder_content");
fetch("https://64c25bf6eb7fd5d6ebcfb379.mockapi.io/api/v1/blogs/" + id, {
  method: "GET",
})
.then((response) => {
    return response.json();
})
.then((data) => {
    render_content(data);
})
.catch((err) => {
    console.log(err);
});
const render_content = (data) => {
    let stringHTML = "";
      stringHTML += `
      <header class="masthead" style="background-image: url('${data.block_img}')">
      <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="post-heading">
                      <h1>${data.title}</h1>
                      <h2 class="subheading">${data.description}</h2>
                      <span class="meta">
                          Posted by
                          <a href="#!">${data.author}</a>
                            on ${data.creatAt}
                      </span>
                  </div>
              </div>
          </div>
      </div>
  </header>
  <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>${data.content}</p>
                        <a href="#!"><img class="img-fluid" src="${data.block_img}" alt="..." /></a>
                    </div>
                </div>
            </div>
        </article>
          `;
    headers_content.innerHTML = stringHTML;
  };


  

//   <article class="mb-4">
//             <div class="container px-4 px-lg-5">
//                 <div class="row gx-4 gx-lg-5 justify-content-center">
//                     <div class="col-md-10 col-lg-8 col-xl-7">
//                         <p>${data.content}</p>
//                         <a href="#!"><img class="img-fluid" src="${data.block_img}" alt="..." /></a>
//                         <span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
//                         <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
//                         <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
//                         <p>
//                             Placeholder text by
//                             <a href="http://spaceipsum.com/">Space Ipsum</a>
//                             &middot; Images by
//                             <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </article>