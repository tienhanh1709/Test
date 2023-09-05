import React from "react";

function Filter(pops) {
  return (
    <>
      <div id="filter">
        <div id="text_filter">
          <h3>Filter by year</h3>
        </div>
        <div id="select_zone">
          <select name="" id="years_ago">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
