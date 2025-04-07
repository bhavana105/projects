import { useState } from 'react';
import style from './input.module.css'
function Input({array,setArray}){

  let [value , setValue] = useState("");
  
 const onHandleText = (e) =>{
  // console.log(e);
  if(e.key === "Enter"){
    let newValue = e.target.value; 
    // console.log(array , newValue)
    setArray ([...array,newValue])
    setValue(" ");
  }
  
 }

  return<>

  <label>Enter Item:</label>
      <input
        id="inputField"
        placeholder="Enter what you want to add"
        className={style.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}

        onKeyDown={onHandleText}
      />
  </>
}

export default Input;