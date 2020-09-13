
const initialState = {count: 45};

// action names
const INCREMENT = 'Increment count';
const DECREMENT = 'Decrement count';


// action object
// {
//   type: 'Action name',
//   payload: {
//     value: 3,
//   }
// }



// reducer

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  if(type === INCREMENT) {
    return  {count: state.count + payload.value};
  }

  if(type === DECREMENT) {
    return  {count: state.count - payload.value};
  }

  return state;
  
}

export default reducer;





// actions

export const incrementAction = (value) => {
  return {
    type: INCREMENT,
    payload: {value}
  }
}

export const decrementAction = (value) => {
  return {
    type: DECREMENT,
    payload: {value}
  }
}