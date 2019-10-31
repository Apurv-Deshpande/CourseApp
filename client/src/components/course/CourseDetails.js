import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import moment from "moment";

class CourseDetails extends Component {
  render() {
    const { course } = this.props;

    const url = `https://www.youtube.com/watch?v=${course.youtube}`;
    const maxDate = moment(course.published).format("MMM Do YY");
    return (
      <div>
        <div class="container">
          <div class="row">
            <div className=" col-md-10">
              <div className="player-wrapper">
                <ReactPlayer
                  url={url}
                  className="react-player"
                  playing
                  width="840px"
                  height="415px"
                />
              </div>
              <h5>{course.title}</h5>
              <p>{maxDate}</p>
            </div>

            <div class col-md-2>
              <div class="card">
                <div class="card-header text-center bg-dark text-white">
                  Tags
                  <ul class="list-group">
                    {course.tags.map((tag, index) => (
                      <li class="list-group-item text-dark" key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CourseDetails.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseDetails;
