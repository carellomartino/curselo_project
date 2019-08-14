import { BUY_COURSE } from "./constants";
import Axios from "axios";

const purchaseCourse = course => {
  return {
    type: BUY_COURSE,
    course
  };
};

export const buyCourse = (courseId, userId) => dispatch => {
  return Axios.get(
    `https://curselo-dev.appspot.com/_ah/api/lms/v2/purchaseCourse?courseId=${courseId}&studentId=${userId}`
  ).then(res => dispatch(purchaseCourse(res)));
};
