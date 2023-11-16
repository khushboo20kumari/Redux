import { buyBook } from "./BookType";
const initialState={
    numberofbook:20
}
const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buyBook : return{
            ...state,numberofbook:state.initialState -1
        }
        default : return state
    }
}
export default BookReducer; 