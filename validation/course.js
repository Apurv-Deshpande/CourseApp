const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCourseInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";

  data.published = !isEmpty(data.published) ? data.published : "";
  data.tags = !isEmpty(data.tags) ? data.tags : "";

  if (!Validator.isLength(data.title, { min: 10, max: 100 })) {
    errors.title = "Title needs to between 2 and 100 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Course Title is required";
  }

  if (Validator.isEmpty(data.published)) {
    errors.published = "Published field is required";
  }

  if (Validator.isEmpty(data.tags)) {
    errors.skills = "Tags field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
