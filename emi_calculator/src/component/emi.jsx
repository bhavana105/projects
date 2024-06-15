import { useState } from "react";
 export function EMICal(){
    const[amount,setAmount] = useState(100000);
    const[intrest,setIntrest] = useState(10.45);
    const[years,setYears] = useState(1);
    const[installment,setInstallment] = useState("");


    function handleAmount(e) {
        setAmount(e.target.value);
    }
    function handleRange(e) {
        setIntrest(e.target.value);
    }
    function handleYear(e) {
        setYears(e.target.value);
    }
    function handleCla(){
        let P = amount;
        let r =intrest/12/100;
        let n =years*12;
        let EMI = [P*r*(Math.pow(1+r),n)]/[Math.pow((1+r),n) -1];
        setInstallment(EMI);
    } 
    return(
        <div className="container-fluid">
         <div className="bg-light">

         <div className="row p-3">
                <div  className="col">
                AMOUNT<input type="text" value={amount} ></input>
                </div >
                
                <div className="col">RATE OF INTEREST
                <input type="number" value={intrest} ></input>
                </div>

                <div className="col">YEARS
                <input type="number" value={years} ></input>
                </div>

                </div>

                <div className="row p-4 mt-2">
                <div  className="col">
                1,00,000<input type="range" onChange={handleAmount} min="100000" max="10000000"></input>
                </div>
                <div className="col">
                10.45%<input type="range" onChange={handleRange}  min="10.45" max="18.45"></input>
                </div>
                <div className="col">
                1<input type="range" onChange={handleYear} min="1" max="5"></input>
                </div>
                </div>
                
                 <div>
                    <button className="btn btn-primary" onClick={handleCla}>caluclate</button>
                    </div>
                    <div>
                    Your installment amount<b>{installment.toLocaleString('en-in', {style:'currency', currency:'INR'})}</b>                   
                     </div>
                    </div>
        </div>
    )
}
