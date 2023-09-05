// useCallback tạo ra 1 function chỉ đc gọi lại khi dependencie thay đổi 
// có 3 dependencie:
// không truyền gọi hàm sau mỗi lần render(giống hàm thường)
// dependencie là mảng rỗng gọi hàm lần render đầu tiên 
// dependencie có parameter gọi lại khi parameter thay đổi

// useMemo tạo ra 1 value chỉ đc tính toán lại khi dependencie thay đổi 
// có 3 dependencie:
// không truyền tính toán lại sau mỗi lần render
// dependencie là mảng rỗng tính lại sau lần render đầu tiên 
// dependencie có parameter tính lại khi parameter thay đổi

//React.memo ghi nhớ lại kết quả chỉ render lại khi có sự khác biệtphụ thuộc vào props 


import "./App.css";
import { useState, useEffect } from "react";
import Block from "./Block";
import FormAddBlock from "./FormAddBlock";

function App() {

  const [listBlock, setListBlock] =useState([]);

  const [loading, setLoading] =useState(true);

  useEffect(() =>{
    fetch('https://64c25bf6eb7fd5d6ebcfb379.mockapi.io/api/v1/blogs')
    .then((response) =>response.json())
    .then((data)=>{
      setLoading(false);
      setListBlock([...data]);
    })
  },[]);
  const handleAddBlock = (data) =>{
      setListBlock([...listBlock, data])
  }
  return(
  <>
      <FormAddBlock AddBlock = {handleAddBlock}/>
      {
        loading === true ? <h1>loading</h1> : listBlock.map((block,index) =>(
          <Block key={block.id} {...block} />
        ))
      }
  </>
  );
}

export default App;
