import { useSelector } from "react-redux";
import CounterAction from "./CounterAction";
import { useDispatch } from "react-redux";

function Counter() {
  const counter= useSelector(state => state.count)
  const distpatch = useDispatch()

  return (
    <>
      <p>count: {counter}</p>

      <button onClick={() => (distpatch(CounterAction()))}>Click me</button>
    </>

  )
}
export default Counter;



