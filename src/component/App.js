import React, {Component} from 'react';
import Counter from './Counter';
import TwoButtons from './TwoButtons';


class App extends Component {
  state = { 
    count: 2
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }
  
  handleDecrement  = () => {
    this.setState({count: this.state.count - 1});
  }
  
  render() { 
    return (
      <div className="App">
        <Counter count={this.state.count} />
      <TwoButtons 
        count={this.state.count}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
      />
      </div>
    );
  }
}
 
export default App;


  