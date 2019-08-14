import Axios from "axios";
import { ADD_PURCHASED, REM_PURCHASED } from "../action-creators/constants";

const fetchCursos = cursos => ({
  type: ADD_PURCHASED,
  cursos
});

const remove = () => ({
  type: REM_PURCHASED
});

export const getMyPurchaseCourse = studentId => dispatch =>
  Axios.get(
    `https://curselo-dev.appspot.com/_ah/api/lms/v2/getMyPurchasedCourses?studentId=${studentId}`
  ).then(cursos => {
    dispatch(fetchCursos(cursos.data.items));
    return cursos;
  });

export const removeCourses = () => dispatch => dispatch(remove());
