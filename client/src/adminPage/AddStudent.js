import React from "react";

export default function AddStudent() {
  return (
    <>
      <div class="card">
        <div class="card">
          <div class="card-header">Student Management Section</div>
          <div class="card-body">
            <h5 class="card-title">
              You can manage each student from this section.
            </h5>
            <p class="card-text">Add, Delete and Update faculty from here.</p>
            <a href="/" class="btn btn-success m-2">
              Update Student
            </a>
            <a href="/" class="btn btn-primary m-2">
              Add Student
            </a>
            <a href="/" class="btn btn-danger m-2">
              Remove Student
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
