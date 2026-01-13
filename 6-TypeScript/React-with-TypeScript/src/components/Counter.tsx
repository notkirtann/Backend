import { useState } from "react"

function Counter() {
    const [count,setCount]=useState<number>(0);
    return(
        <div>
            <p>Cup ordered :{count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>Order One More </button>
        </div>
    )
}
export default Counter