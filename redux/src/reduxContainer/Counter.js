import { useSelector } from "react-redux";
import CounterAction from "./CounterAction";
import { useDispatch } from "react-redux";

function Counter() {
  const numofbook = useSelector(state => state.numberofbook)
  const distpatch = useDispatch()

  return (
    <>
      <p>container{numofbook}</p>
      <button onClick={() => (distpatch(CounterAction()))}>Click me</button>
    </>

  )
}
export default Counter;



