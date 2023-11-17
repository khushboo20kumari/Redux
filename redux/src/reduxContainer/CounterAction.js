import { increment } from "./CounterType";
function CounterAction(){
    return{
        type:increment
    }
}
export default CounterAction;