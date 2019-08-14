import {
  GET_CURSOS_INSTRUCTOR,
  GET_CURSO_INSTRUCTOR,
  GET_SECCIONES,
  GET_TOPICS,
  FORGET_COURSE,
  CREATE_SECTION
} from "../action-creators/constants";

const initialState = {
  all: [],
  course: {},
  secciones: [],
  topics: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURSOS_INSTRUCTOR:
      return Object.assign({}, state, { all: action.cursos });
    case GET_CURSO_INSTRUCTOR:
      return Object.assign({}, state, { course: action.curso });
    case GET_SECCIONES: {
      if (action.secciones)
        return Object.assign({}, state, { secciones: action.secciones });
      else return Object.assign({}, state, { secciones: [] });
    }
    case GET_TOPICS: {
      if (action.topics)
        return Object.assign({}, state, { topics: action.topics });
      else return Object.assign({}, state, { topics: [] });
    }
    case FORGET_COURSE:
      return Object.assign({}, state, {
        course: {},
        secciones: [],
        topics: []
      });
    case CREATE_SECTION:
      return Object.assign({}, state, {
        secciones: [...state.secciones, action.section]
      });

    default:
      return state;
  }
};
