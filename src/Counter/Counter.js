import { useSelector,useDispatch } from "react-redux";
import { incrementCount,decrementCount,resetCount } from "../Slice/appSlice";

const Counter=()=>{
    debugger;
    const count = useSelector((state) => state.appCounter.count);

const dispatch=useDispatch();

return(
 <>
 <section>
    <p>{count}</p>
    <div>
        <button onClick={()=>dispatch(incrementCount(1))}>+</button>
        <button onClick={()=>dispatch(decrementCount(1))}>-</button>
        <button onClick={()=>dispatch(resetCount(0))}>Reset Count</button>
    </div>
 </section>
 </>   
)


}
export default Counter