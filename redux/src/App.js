import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './reduxContainer/Store';
import Counter from './reduxContainer/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;


// import Counter from "./CounterContainer/Counter";
// function App(){

//     return(
//         <div className="App">
//             <Counter/>

//         </div>
//     )
// }
// export default App;