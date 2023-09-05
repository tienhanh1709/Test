import React from 'react'

function Block(pops) {
  return (
    <div>
        <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">
            {pops.title}
          </h2>
          <h3 className="post-subtitle">{pops.description}</h3>
        </a>
        <p className="post-meta">
          Posted by
          <a href="#!">{' '+pops.author}</a>
         {` ${pops.creatAt}`}
        </p>
      </div>
      <hr className="my-4"></hr>
    </div>
  )
}

export default Block;