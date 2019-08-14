import { UPDATE_COURSE } from "./constants";

export default (updateCourse = course => {
  return {
    type: UPDATE_COURSE,
    course
  };
});
