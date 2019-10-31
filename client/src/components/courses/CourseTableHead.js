import React, { Component } from "react";

class CourseTableHead extends Component {
  render() {
    return (
      <thead class="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Publish Date</th>
        </tr>
      </thead>
    );
  }
}

export default CourseTableHead;
