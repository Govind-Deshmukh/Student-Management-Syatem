import React from "react";

export default function AddTeacher() {
  return (
    <div>
      <div class="card">
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
          <a href="/" class="btn btn-danger m-2">
            Remove Teacher
          </a>
        </div>
      </div>
    </div>
  );
}
