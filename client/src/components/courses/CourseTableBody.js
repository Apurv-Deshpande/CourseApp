import React, { Component } from "react";
import PropTypes from "prop-types";

import moment from "moment";
class CourseTableBody extends Component {
  render() {
    const { course } = this.props;

    const maxDate = moment(course.published).format("MMM Do YY");
    return (
      <tbody>
        <tr key={course._id}>
          <td>
            <a href={`/courses/${course._id}`}>{course.title}</a>
          </td>
          <td>{maxDate}</td>
        </tr>
      </tbody>
    );
  }
}

CourseTableBody.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseTableBody;
