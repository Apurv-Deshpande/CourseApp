import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseTableBody from "./CourseTableBody";
import CourseTableHead from "./CourseTableHead";

class CourseFeed extends Component {
  render() {
    const { courses } = this.props;
    const tableBody = courses.map(course => (
      <CourseTableBody key={course._id} course={course} />
    ));

    return (
      <table class="table table-striped table-hover table-codensed">
        <CourseTableHead />
        {tableBody}
      </table>
    );
  }
}

CourseFeed.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseFeed;
