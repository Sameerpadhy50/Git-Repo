import React from "react";

export const Pagination = ({skip,handleClick,quotes}) => {

const page=skip/5+1


  return (
    <div>
      <button disabled={skip<=0} onClick={()=>handleClick(skip-5)}>Previous</button>
      <button>{page}</button>
      <button onClick={()=>handleClick(skip+5)}>Next</button>
    </div>
  );
};
