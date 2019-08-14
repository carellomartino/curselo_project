import {
  CREATE_USER,
  BUY_COURSE,
  DELOG_USER
} from "../action-creators/constants";

const initialState = {
  user: {},
  purchasedCourse: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, { user: action.user });
    case BUY_COURSE:
      return Object.assign({}, state, { purchasedCourse: action.course });
    case DELOG_USER:
      return Object.assign({}, state, { user: {}, purchasedCourse: [] });
    default:
      return state;
  }
};
