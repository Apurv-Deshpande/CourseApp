import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseTableBody from "../courses/CourseTableBody";

class HomeFeed extends Component {
  render() {
    const { courses } = this.props;

    courses.sort(function compare(a, b) {
      var dateA = new Date(a.published);
      var dateB = new Date(b.published);
      return dateA - dateB;
    });

    const tableFeatured = courses
      .filter(course => course.featured)
      .map(course => <CourseTableBody key={course._id} course={course} />);

    const tablePublished = courses.map(course => (
      <CourseTableBody key={course._id} course={course} />
    ));

    return (
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header text-center bg-dark text-white">
              New Courses
              <ul class="list-group">
                <li class="list-group-item text-center">{tablePublished}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header text-center bg-dark text-white">
              Featured Courses
              <ul class="list-group">
                <li class="list-group-item text-center ">{tableFeatured}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeFeed.propTypes = {
  courses: PropTypes.array.isRequired
};

export default HomeFeed;
