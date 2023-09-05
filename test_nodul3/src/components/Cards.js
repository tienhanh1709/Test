import React, { useState } from 'react'
import { Card } from 'antd';
import { Radio } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Cards = (pops) => {
  const [flag , setFlag] = useState(false);

  const notifyT = () => toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


    const notifyF = () => toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    

  const [pos, setPos] = useState(0);
    const handleIndex = (a) =>{
     setPos(a);
    }
    const handleAnswer = (e)=>{
            if(e.target.value === pops.datas[pos].correct_answer){
              setFlag(true)
            }else{
              setFlag(false)
            }

            // console.log(pops.datas[pos].correct_answer,e.target.value,pos)

          }
  return (
    <>
        {pops.datas.map((data,index) => (
          <div onClick={()=>handleIndex(index)}>
          <Card title={data.question} bordered={false} style={{ width: 500 }} onChange={handleAnswer}>
            <Radio.Group style={{display : 'flex', flexDirection : 'column'}} onClick = {flag ? notifyT : notifyF}>
              <Radio value={data.correct_answer} >{data.correct_answer}</Radio>
              {data.incorrect_answers.map((answer,i) => (
                <Radio value={answer} >{answer}</Radio>
              ))}
            </Radio.Group>
          </Card> 
          </div> 
        ))}
        <div>
        <ToastContainer />
        </div>
    </>
  )
}

export default Cards