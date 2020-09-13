
const initalState = {diff: 1};

// action name 
const SET_DIFF = 'Set value of diff';


const reducer = (state = initalState, action) => {
  const {type, payload} = action;

  if(type === SET_DIFF) {
    return {diff: payload.value}
  }

  return state;

}

export default reducer;


export const setDiffAction = (value) => {
  return {
    type: SET_DIFF,
    payload: {value}
  }
}