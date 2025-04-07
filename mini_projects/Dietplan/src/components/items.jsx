import { useState } from 'react';
import Input from './input';
import Error from './erorr';
import styles from './items.module.css'


function List (){
  // let [items , setItems] = useState(["sprots","oats","soyabeens"]);
  
  let [items , setItems] = useState([]);
  return<>
      <Input array ={items} setArray={setItems}/>

<ul class={`list-group list-group-flush ${styles.items}`}>
<Error list = {items}/>
  {
 items.map((item,index) =>
  <li key={index} class={`list-group-item ${styles.item}`}>{item}
  <button className={styles.btn}>Ate</button></li>
  )}
    

</ul>
  </>
}
export default List;