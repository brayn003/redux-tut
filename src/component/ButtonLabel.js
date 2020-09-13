import React from 'react';

const ButtonLabel = (props) => {
  const {count} = props;
  return ( 
    <span style={{backgroundColor: 'yellow'}} >
      {count}
    </span>
   );
}
 
export default ButtonLabel;