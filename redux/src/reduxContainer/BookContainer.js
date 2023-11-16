import { useSelector } from "react-redux";
import BookShop from "./BookShop";
import { useDispatch } from "react-redux";
function BookContainer(){
    const numofbook=useSelector(state=>state.numberofbook)
    const distpatch=useDispatch()

    return(
        <>
        <p>container{numofbook}</p>
        <button onClick={()=>(distpatch(BookShop()))}>Click me</button>
        </>
        
    )
}
export default BookContainer;