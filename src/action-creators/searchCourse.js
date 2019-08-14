import Axios from "axios";
import { SEARCH_COURSES } from "../action-creators/constants";

const searchingCourse = searchCourse => ({
  type: SEARCH_COURSES,
  searchCourse
});

export const searchCourse = name => dispatch => {
  return Axios.get(
    `https://curselo-dev.appspot.com/_ah/api/lms/v2/searchCourses?query=${name}`
  ).then(res => dispatch(searchingCourse(res.data)));
};
