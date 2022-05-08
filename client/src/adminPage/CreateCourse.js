import React from 'react'
import './common.css';
export default function CreateCourse() {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">Course Section</div>
        <div class="card-body">
          <h5 class="card-title">You can manage courses from this section.</h5>
          <p class="card-text">
            Create Course, Update and delete course from this section.
          </p>
          <a href="/" class="btn btn-success m-2">
            Create Course
          </a>
          <a href="/" class="btn btn-primary m-2">
            Update Course
          </a>
          <a href="/" class="btn btn-danger">
            Remove Course
          </a>
        </div>
      </div>
    </div>
  )
}
