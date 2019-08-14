import { CREATE_USER, DELOG_USER } from "../action-creators/constants";

export const createUser = user => {
  return {
    type: CREATE_USER,
    user
  };
};

export const deLogUser = () =>{
  return {
    type: DELOG_USER,
  }
}