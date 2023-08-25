import React, { useState } from "react";
const data={
    name:"",
    address:"",
    accountNo:"",
    cvvNo:""

}

export const Payment = () => {
    const [formData,setFormdata]=useState(data)

    const handleChange=(event)=>{
       const {value,name}=event.target
       setFormdata({...formData,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)

    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"  name="name" placeholder="Name"  value={formData.name} onChange={handleChange}/>
        <input type="text"  name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>
        <input type="text"  name="accountNo" placeholder="Account Number" value={formData.accountNo} onChange={handleChange}/>
        <input type="text"  name="cvvNo" placeholder="cvv"  value={formData.cvvNo} onChange={handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};
