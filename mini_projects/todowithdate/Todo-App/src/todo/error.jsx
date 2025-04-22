
function Error ({listItems}){
  return(
    <>
    <h3 style={{color:"red"}}>{listItems.length === 0 ? <h3>Add Your ToDoList</h3> : " "}
    </h3>
    </>
  )
}

export default Error ;