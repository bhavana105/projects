// import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react'
import DateTime from './components/datetime'
import ClearAll from './components/Clearall'
import './App.css'


function App() {
 const[input,setInput] = useState("");
 const[store,setStore] = useState([]);

 const handleInputValues = (e) =>{
  setInput(e.target.value);
 }

 const handleSubmit = (event) =>{
  event.preventDefault();

  if (!input.trim()) {
    alert("Please enter something.");
    return;
  }

  if (store.find(item => item.text === input)) {
    alert("You already entered this item.");
    setInput("");
    return;
  }
 //localstorage
 localStorage.setItem("",JSON.stringify(store));

 // Check for duplicates
 if (store.some(item => item.text === input)) {
  alert("You already entered this item.");
  setInput("");
  return;
}

 setStore([...store, {text:input,chicked:false}]);
 setInput("")
 }



 const handleDelete = (value) =>{
console.log(store);
const updated = store.filter((item) => item.text !== value);
    setStore(updated);
console.log(updated);
 }

 const toggleTick = (text) => {
  const updated = store.map(item =>
    item.text === text ? { ...item, checked: !item.checked } : item
  );
  setStore(updated);
};

  return (
    <>
    <div className="container">
     <h1>Todo List</h1>

     <img src='./imgs/what should i do.webp' className='bgimg'/>
     <DateTime/>
     <form onSubmit={handleSubmit}>
      <input 
      
      type="text"
       placeholder='Type here' autoComplete='off' 
       value={input} 
       onChange={handleInputValues}/>
      <button style={{backgroundColor:"green"}}>Add</button>
     </form>

     <div>
      < ul>{
        store.map((item,index)=>(
          <li key={index} className="items">

        <span  onClick={() => toggleTick(item.text)} >
                <img className="checked"
                  src={item.checked ? "./imgs/tick.png" : "./imgs/not_tick.png"}
                  alt="status"
                />
              </span>  
                <span style={{fontSize:"20px"}}>{item.text}</span>
          <span onClick={()=>handleDelete(item.text)}>
          {/* <MdDeleteForever  /> */}
          <img className="delete" src='./imgs/delete.png'/>
          </span>
         
          </li>
        ))
      }</ul>
      <ClearAll setStore={setStore}/>
     </div>
     </div>
    </>
  )
}

export default App
