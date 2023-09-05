import './App.css';
import Header from './component/Header';
import Filter from './component/Filter';
import Chart from './component/Chart';
import Expense from './component/Expense';
import AddForm from './component/AddForm';
import { useState } from 'react';
function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [listExpense , setListExpense] = useState([
    {
      id : 1,
      name : 'Some Book',
      createAt : '2022-12-02', //yyyy-mm-dd
      price : 50
    },
    {
      id : 2,
      name : 'Electricity',
      createAt : '2022-10-11',
      price : 75
    },
    {
      id : 3,
      name : 'New Bike',
      createAt : '2022-08-05',
      price : 100
    }
]);
  const handelAdd = () => {
    setIsAdd(!isAdd);
    
  }

  const handleAddExpense = (data) =>{
    setListExpense([...listExpense, data])
}
  return (
    <div id="wapper">
      {isAdd ?  <AddForm  handelAdd ={handelAdd} handleAddExpense = {handleAddExpense}/> : <Header handelAdd ={handelAdd}/>}

      <div id="content">
        <Filter />
        <Chart />


        <div id="expen">
          {listExpense.map((expense) =>(
            <Expense key={expense.id} {...expense}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
