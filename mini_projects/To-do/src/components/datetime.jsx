import { useState } from "react";

const DateTime = () =>{
const [dateTime , setDateTime] = useState();

const getDateTime = () =>{
  const d = new Date();
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();
  setDateTime(`${date} - ${time}`)
}

  setInterval(()=>{
    getDateTime();
  },1000);

  return(
<>
<h2>{dateTime} </h2>
</>
  )
}
export default DateTime;