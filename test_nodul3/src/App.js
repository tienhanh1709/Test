import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
// import type { RadioChangeEvent } from 'antd';


function App() {

  
  // const [kq , setKq] = useState( Math.floor(Math.random() * 11));
  // console.log('number random: ', kq)
  // const [number , setNumber] = useState(null);
  // const [count, setCount] = useState(0);
  // const handelValue = (e) =>{
  //   setNumber(Number(e.target.value));  
  // }
  // console.log(number)
  // const handelCheck = () =>{
  //   if(number !== kq && count < 2){
  //       alert('Nhập lại,Sai rồi')
  //       setCount(count + 1);

  //   }else if(number !== kq && count === 2){
  //     alert('Game over')
  //       setCount(0);
  //       setKq(Math.floor(Math.random() * 11))
  //   }else if(number === kq && count <=2){
  //     alert('Đúng');
  //     setCount(0);
  //     setKq(Math.floor(Math.random() * 11))
  //   }
  //   console.log(count)
  //   setNumber(null)
  // }

  const [datas, setDatas] = useState([]);
  useEffect(() =>{
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
   .then(response => response.json())
   .then(data => setDatas(data.results));
  }, [])
   return (
    // <>
    //   <input type="number" name="" id="" onChange={handelValue}/>
    //   <button onClick={handelCheck}>
    //     Quay số 
    //   </button>
    // </>
    <>
        <Cards  datas ={ datas }/>
    </>
  );
}

export default App;
