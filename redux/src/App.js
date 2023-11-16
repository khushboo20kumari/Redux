import { Provider } from "react-redux"
import './App.css';
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";

function App() {   
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer/>
         
      </div>
    </Provider>
  );
}

export default App;
