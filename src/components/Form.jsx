import React from 'react'
import './Form.css';
import { useState } from 'react';
const Form = ({onAddItems}) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1)
   
    function handleSubmit(e){
        e.preventDefault();
        console.log("Description...",description)
        console.log("quantity...",quantity);
        const newItem={description,quantity,packed:false,id:Date.now()}
        console.log("nre item...",newItem);
        onAddItems(newItem)
    }
    return (
        <>
        <form className='add-form' onSubmit={handleSubmit}>
            <h3> What Do You Think For Your Trip 😂</h3>
            <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>  
                {/* <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option> */}
                {Array.from({length:7},(_,i)=>i+1).map(
                    num=><option value={num} key={num}>{num}</option>
                )}
            </select>
            <input type='text' placeholder='items...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button className='btn'>Add</button> 
        </form>
        </>
    )
}

export default Form