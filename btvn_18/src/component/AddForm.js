import React, { useState } from "react";

function AddForm(pops) {
  const [name ,setName] = useState('');
  const [price ,setPrice] = useState(0);
  const [createAt ,setCreateAt] = useState('');

  const handleSummit = (e) => {
    const newExpense ={
      name,
      createAt,
      price,
  }
  pops.handleAddExpense(newExpense);

  }

  const handleGetName = (event) => {
    setName(event.target.value);
  }
  const handleGetPrice = (event) => {
    setPrice(Number(event.target.value));
  }
  const handleGetCreateAt = (event) => {
    setCreateAt(event.target.value);
  }
  return (
    <>
      <div id="add_expen">
        <div  id="form_add">
          <div className="form_row">
            <label htmlFor="" className="label_colunm">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name here...."
              className="ipt_colunm"
              onChange={handleGetName}
            />
          </div>
          <div className="form_row">
            <label htmlFor="" className="label_colunm">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter your amount here...."
              className="ipt_colunm"
              onChange={handleGetPrice}
            />
          </div>
          <div className="form_row">
            <label htmlFor="" className="label_colunm">
              Date
            </label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              className="ipt_colunm"
              onChange={handleGetCreateAt}
            />
          </div>
          <div className="form_btn">
            <button type="submit" id="btn_add" onClick={handleSummit}>
              ADD
            </button>
            <button type="submit" id="btn_cancel" onClick={pops.handelAdd}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddForm;
