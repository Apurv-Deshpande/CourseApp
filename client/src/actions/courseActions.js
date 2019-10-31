import axios from "axios";

import { CLEAR_ERRORS, GET_COURSES, GET_COURSE, COURSE_LOADING } from "./types";

// Add Post

export const getCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get("/api/courses")
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSES,
        payload: null
      })
    );
};

// Get Post
export const getCourse = id => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get(`/api/courses/${id}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
    );
};

// Delete Post

// Set loading state
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
