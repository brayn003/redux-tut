import React from 'react';
import Counter from './Counter';
import DiffComponent from './DiffComponent';
import TwoButtons from './TwoButtons';


// class App extends Component {
//   state = { 
//     count: 2
//   }

//   handleIncrement = () => {
//     this.setState({count: this.state.count + 1});
//   }
  
//   handleDecrement  = () => {
//     this.setState({count: this.state.count - 1});
//   }
  
//   render() { 
//     return (
//       <div className="App">
//         <Counter count={this.state.count} />
//       <TwoButtons 
//         count={this.state.count}
//         onIncrement={this.handleIncrement} 
//         onDecrement={this.handleDecrement} 
//       />
//       </div>
//     );
//   }
// }
 

const App = () => {
  return ( 
    <div>
      <DiffComponent />
      <Counter />
      <TwoButtons />
    </div>
  );
}
 
export default App;





  