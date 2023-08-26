import React from "react";

export const Pagination = ({skip,handlePageChange,quotes,limit}) => {
   
 

const page= skip/limit +1


  return (
    <div>
      <button disabled={skip<=0} onClick={()=>handlePageChange(skip-limit)}>Previous</button>
      <button>{page}</button>
      <button onClick={()=>handlePageChange(skip+limit)}>Next</button>
    </div>
  );
};
