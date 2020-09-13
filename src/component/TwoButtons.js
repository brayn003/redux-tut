import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrementAction, incrementAction } from '../store/count';

const TwoButtons = (props) => {
  const {increment, decrement, diff} = props;

  const handleIncrement = () => {
    increment(diff);
  }

  const handleDecrement = () => {
    decrement(diff);
  }

  return ( 
    <div>
      <button onClick={handleIncrement} >
          ++ {diff}
      </button>
      <button onClick={handleDecrement} >
          -- {diff}
      </button>
    </div>
   );
}


// get type connection
const mapStateToProps = (state) => {
  return {
    diff: state.diffReducer.diff
  }
}


// set type connection
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment: incrementAction,
    decrement: decrementAction
  }, dispatch);
} 



// connect(mapStateToProps, mapDispatchToProps)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(TwoButtons);
 
// export default TwoButtons;