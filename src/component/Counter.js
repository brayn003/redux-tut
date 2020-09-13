import React from 'react';
import { connect } from 'react-redux';

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

// get type connection
const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  }
}

// set type connection
 
// connect(mapStateToProps, mapDispatchToProps)(Component)
export default connect(mapStateToProps, null)(Counter);
// export default Counter;