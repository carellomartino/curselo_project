import { ADD_PURCHASED, REM_PURCHASED } from "../action-creators/constants";

const initialState = {
  courses: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PURCHASED:
      return Object.assign({}, state, { courses: action.cursos });
    case REM_PURCHASED:
      return Object.assign({}, state, { courses: [] });
    default:
      return state;
  }
};
