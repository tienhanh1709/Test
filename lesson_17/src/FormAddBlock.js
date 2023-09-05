import React, { useState } from "react";


function FormAddBlock(pops) {
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [author , setAuthor] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();//Chống reload lạo trang (Form)
        const newBlock ={
            title,
            description,
            author,
            id :100
        }
        pops.AddBlock(newBlock);
    }

    const getTitle = (event) =>{
        setTitle(event.target.value);
    }

    const getDescription = (event) =>{
        setDescription(event.target.value);
    }

    const getAuthor = (event) =>{
        setAuthor(event.target.value);
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" onChange={getTitle}></input>
        </div>

        <div>
          <label>Description</label>
          <input type="text" onChange={getDescription}></input>
        </div>

        <div>
          <label>Author</label>
          <input type="text" onChange={getAuthor}></input>
        </div>

        <div>
          <button type="submit" >Add Block</button>
        </div>
      </form>
    </>
  );
}

export default FormAddBlock;
