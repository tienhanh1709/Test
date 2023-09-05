import React from "react";

function Expense(pops) {
  let timeslipt= pops.createAt.split('-');
  switch(timeslipt[1]) {
    case '01':
      timeslipt[1] = 'January'
      break;
    case '02':
      timeslipt[1] = 'February'
      break;
    case '03':
      timeslipt[1] = 'March'
      break;
    case '04':
      timeslipt[1] = 'April'
      break;
    case '05':
      timeslipt[1] = 'May'
      break;
    case '06':
      timeslipt[1] = 'June'
      break;
    case '07':
      timeslipt[1] = 'July'
      break;
    case '08':
      timeslipt[1] = 'August'
      break;
    case '09':
      timeslipt[1] = 'September'
      break;
    case '10':
      timeslipt[1] = 'October'
      break;
    case '11':
      timeslipt[1] = 'November'
      break;
    case '12':
      timeslipt[1] = 'December'
      break;
    default:
      // code block
  }

  return (
    <>
      <div className="work">
        <div className="work_left">
          <div className="time">
            <div className="mm">
              <p>{timeslipt[1]}</p>
            </div>
            <div className="yyyy">
              <h3>{timeslipt[0]}</h3>
            </div>
            <div className="dd">
              <h2>{timeslipt[2]}</h2>
            </div>
          </div>
          <div className="work_name">
            <h1>{pops.name}</h1>
          </div>
        </div>
        <div className="work_right">
          <div className="price">
            <h2>{`$ ${pops.price}`}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expense;
