import { SEARCH_COURSES } from "../action-creators/constants";

const initialState = {
  searchCourse: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return Object.assign({}, state, { searchCourse: action.searchCourse });
    default:
      return state;
  }
};
