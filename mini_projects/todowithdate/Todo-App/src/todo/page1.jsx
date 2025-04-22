import { useState } from "react"
import { MdDelete } from "react-icons/md";
import Error from '../todo/error';


import styles from './page.module.css'
function Todo (){
//  *********one way*************
//   const [arrText, setArrText] = useState(["Buy Milk", "Bhavana"]);
//   const [arrDate, setArrDate] = useState(["01-02-2025", "05-06-2025"]);
//   const[text , setText] = useState(" ")
//   const[date , setDate] = useState("")
// it is in handleTheBtn
// setArrText([...arrText, text]);
// setArrDate([...arrDate, date]); 
// item[index]
//  ************one way**********


  const [items, setItems] = useState([
    { text: "Buy Milk", date: "01-02-2025" }
  ]);


  // const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleInputText = (e)=>{
    console.log(e.target.value)
    setText(e.target.value);
  }

  const handleInputDate = (e)=>{
    console.log(e.target.value)
    setDate(e.target.value);
  }

  
   const handleTheBtn = (e) => {
console.log(e);
e.preventDefault();//neccessary we use here
    if (text !== "" && date!== "") {
      const newItems = { text, date };
      console.log(newItems)
      setItems([...items, newItems]);
      setText("");
      setDate("");
      }
      else{
alert("plese enter all")
      }
     
  };
    
    const deleteText = (index) => {
      // Copy the current items array
      const newItems = [...items];
    
      // Remove the item at the given index 
      newItems.splice(index, 1);
    
      // Update the state
      setItems(newItems);
    };


  return<>

{/* input rows */}
  <div className="container text-center">
  <form onSubmit={handleTheBtn}>
  <div className="row">
    <div className="col-4">
    <input placeholder="Enter the value"  onChange={handleInputText}  value={text} />  
    </div>

    <div className="col-4">
    <input type="date" className="date" onChange={handleInputDate}  value={date}/>

    </div>
    <div className="col-3">
    <button  type="submit" className={`btn btn-success ${styles.add}`} >Add</button>
    </div>
  </div>
  </form>
</div>


<div className="container text-center">
<div className="row">
<Error listItems={items}/>


            {items.map((item, index) => (

              <div className="d-flex align-items-center" key={index}>
                    <div className={`col-4 ${styles.every}`}>{item.text}</div>
                    <div className={`col-4 ${styles.every}`}>{item.date}</div>

                    <div className={`col-3 ${styles.every}`}>
                <button type="button" className={`btn btn-danger ${styles.delete}`} 
 onClick={() => deleteText(index)}><MdDelete/></button>
                </div>
              </div>
            ))}
          </div>
        </div>


{/* <div className="container text-center">
<div className="col-4 ">
<div className=" row text-center">
{
  arrText.map((items,index)=>(
<p className="col" key={index}> {items}</p>
  ))
}
</div>
</div>
<div className="col-4 ">
<div className="row  text-center">
{
  arrDate.map((items,index)=>(
    <p className="col " key={index}> {items}</p>
  ))
}
</div>
</div>
</div> */}

  </>
}
export default Todo ;