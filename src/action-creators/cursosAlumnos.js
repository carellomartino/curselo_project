import { ADD_CURSOS_ALUMNO, ADD_CURSO_ALUMNO } from "./constants";
import axios from "axios";

const ADD_CURSOS = cursos => ({
  type: ADD_CURSOS_ALUMNO,
  cursos
});
const ADD_CURSO = curso => ({
  type: ADD_CURSO_ALUMNO,
  curso
});

export const fetchCursosAlumno = () => dispatch =>
  axios
    .get(
      "https://curselo-dev.appspot.com/_ah/api/lms/v2/getAllAvailableCourses"
    )
    .then(res => res.data)
    .then(cursos => dispatch(ADD_CURSOS(cursos)));

export const fetchCursoAlumno = id => dispatch =>
  axios
    .get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${id}`
    )
    .then(res => res.data)
    .then(curso => dispatch(ADD_CURSO(curso)));
