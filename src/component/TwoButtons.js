import React from 'react';
import ButtonLabel from './ButtonLabel';

const TwoButtons = (props) => {
  const {onIncrement, onDecrement, count} = props;
  return ( 
    <div>
      <button onClick={onIncrement} >
        <ButtonLabel count={count} /> + 1
      </button>
      <button onClick={onDecrement} >
        <ButtonLabel count={count} /> - 1
      </button>
    </div>
   );
}
 
export default TwoButtons;