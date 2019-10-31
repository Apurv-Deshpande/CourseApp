import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import CourseDetails from "./CourseDetails";
import Spinner from "../common/Spinner";
import { getCourse } from "../../actions/courseActions";

class Course extends Component {
  componentDidMount() {
    this.props.getCourse(this.props.match.params.id);
  }

  render() {
    const { course, loading } = this.props.course;
    let courseContent;

    if (course === null || loading || Object.keys(course).length === 0) {
      courseContent = <Spinner />;
    } else {
      courseContent = (
        <div>
          <CourseDetails course={course} />
        </div>
      );
    }

    return (
      <div className="course">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{courseContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Course.propTypes = {
  getCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse }
)(Course);
