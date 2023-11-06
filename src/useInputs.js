import { useReducer } from "react";

function reducer(state, action) {
  //state를 update 힐때
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default useInputs;
