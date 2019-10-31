import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getCourses } from "../../actions/courseActions";
import CourseFeed from "./CourseFeed";

class Courses extends Component {
  componentDidMount() {
    this.props.getCourses();
  }
  render() {
    const { courses, loading } = this.props.course;
    let courseContent;
    if (courses === null || loading) {
      courseContent = <Spinner />;
    } else {
      courseContent = <CourseFeed courses={courses} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{courseContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourses }
)(Courses);
