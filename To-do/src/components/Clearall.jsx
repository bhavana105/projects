const ClearAll = ({setStore}) =>{
  const handleClearAll = () =>{
    console.log("click");
    setStore([]);

  }
  return(
    <>
    <button style={{backgroundColor:"red"}} onClick={handleClearAll}>Clear all</button>
    </>
  )
}
export default ClearAll;