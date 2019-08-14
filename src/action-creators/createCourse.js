import {CREATE_COURSE} from './constants'

export default createCourse = (course)=>{
    return{
        type:CREATE_COURSE,
        course,
    }
}
