import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getCourses } from "../../actions/courseActions";
import HomeFeed from "./HomeFeed";
import Welcome from "./Welcome";
class Home extends Component {
  componentDidMount() {
    this.props.getCourses();
  }
  render() {
    const { courses, loading } = this.props.course;
    let courseContent;
    if (courses === null || loading) {
      courseContent = <Spinner />;
    } else {
      courseContent = <HomeFeed courses={courses} />;
    }
    return (
      <div>
        <Welcome />
        <div className="col-md-12">{courseContent}</div>
      </div>
    );
  }
}

Home.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourses }
)(Home);
