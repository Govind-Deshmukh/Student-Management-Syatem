import React from "react";
import "./common.css";
export default function AddTeacher() {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">Teacher Management Section</div>
        <div class="card-body">
          <h5 class="card-title">You can manage faculty from this section.</h5>
          <p class="card-text">
            Add, Delete and Update faculty from here. 
          </p>
          <a href="/" class="btn btn-success m-2">
            Update Teacher
          </a>
          <a href="/" class="btn btn-primary m-2">
            Add Teacher
          </a>
          <a href="/" class="btn btn-danger">
            Remove Teacher
          </a>
        </div>
      </div>
    </div>
  );
}
