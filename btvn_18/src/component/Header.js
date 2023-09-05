import React from "react";

function Header(pops) {
  return (
    <>
      <div id="header">
        <button className="header_btn" type="submit" onClick={pops.handelAdd}>
          ADD NEW EXPENSE
        </button>
      </div>
    </>
  );
}

export default Header;
