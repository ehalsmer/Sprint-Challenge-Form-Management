import React from 'react';
import FormikForm from './Form';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <FormikForm />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <FormikForm />
      </div>
    )
  }
}

export default App;
