import React from 'react';

const Counter = (props) => {
  const {count} = props;
  return ( 
    <div>
      <p style={{fontWeight: 700, fontSize: 48 }}>
        {count}
      </p>
    </div>
   );
}
 
export default Counter;