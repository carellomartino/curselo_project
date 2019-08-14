import { CREATE_SECTION } from "./constants";
import axios from "axios";

const createSection = section => {
  return {
    type: CREATE_SECTION,
    section
  };
};

export const createNewSection = section => dispatch =>
  axios
    .post(
      "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseSection",
      section
    )
    .then(res => res.data)
    .then(sec => dispatch(createSection(sec)));
