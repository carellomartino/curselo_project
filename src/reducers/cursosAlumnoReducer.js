import {
  ADD_CURSOS_ALUMNO,
  ADD_CURSO_ALUMNO
} from "../action-creators/constants";

const initialState = {
  all: [],
  course: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURSOS_ALUMNO:
      return Object.assign({}, state, { all: action.cursos });
    case ADD_CURSO_ALUMNO:
      return Object.assign({}, state, { course: action.curso });

    default:
      return state;
  }
};
