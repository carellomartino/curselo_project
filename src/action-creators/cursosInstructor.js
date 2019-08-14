import {
  GET_CURSOS_INSTRUCTOR,
  GET_CURSO_INSTRUCTOR,
  GET_SECCIONES,
  GET_TOPICS,
  FORGET_COURSE
} from "./constants";
import axios from "axios";

const ADD_CURSOS = cursos => ({
  type: GET_CURSOS_INSTRUCTOR,
  cursos
});
const ADD_CURSO = curso => ({
  type: GET_CURSO_INSTRUCTOR,
  curso
});

const ADD_SECCIONES = secciones => ({
  type: GET_SECCIONES,
  secciones
});

const ADD_TOPICS = topics => ({
  type: GET_TOPICS,
  topics
});
const FORGETCOURSE = () => ({
  type: FORGET_COURSE
});

export const forgetCourse = () => dispatch => dispatch(FORGETCOURSE());

export const fetchCursosInstructor = id => dispatch =>
  axios
    .get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getMyCourses?ownerId=${id}`
    )
    .then(res => res.data)
    .then(cursos => dispatch(ADD_CURSOS(cursos)));

export const deleteCourse = id =>
  axios
    .post(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/archiveCourse?courseId=${id}`
    )
    .then(res => res.data);

export const deleteSection = id =>
  axios
    .post(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/archiveCourseSection?sectionId=${id}`
    )
    .then(res => res.data);

export const fetchCursoInstructor = id => dispatch =>
  axios
    .get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${id}`
    )
    .then(res => res.data)
    .then(curso => dispatch(ADD_CURSO(curso)));

export const fetchSeccionesDeUnCurso = id => dispatch =>
  axios
    .get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourseSections?courseId=${id}`
    )
    .then(res => res.data)
    .then(secciones => dispatch(ADD_SECCIONES(secciones.items)));

export const fetchTopicsDeUnaSeccion = id =>
  axios
    .get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getSectionTopics?sectionId=${id}`
    )
    .then(res => res.data)
    .then(topics => topics.items);

export const createCourse = curso => dispatch =>
  axios
    .post("https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourse", curso)
    .then(res => res.data)
    .then(curso => {
      dispatch(ADD_CURSO(curso));
      return curso;
    });
