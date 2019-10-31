import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "AIzaSyD1vBDSVM65pqUYcMpQQtuwWqFIazB_Vkg";

class Youtube extends Component {
  render() {
    const { course } = this.props;
    const url = `https://www.youtube.com/embed/${course.youtube}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
      </div>
    );
  }
}

Youtube.propTypes = {
  course: PropTypes.object.isRequired
};

export default Youtube;
