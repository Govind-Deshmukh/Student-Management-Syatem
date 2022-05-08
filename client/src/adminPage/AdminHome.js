import React from "react";

import GeneralHeader from "../webComponents/GeneralHeader";


export default function AdminHome() {
  return (
    <div>
      <GeneralHeader />
      <div className="d-flex justify-content-center row m-5">
        <div className="col-md-6">
          <div class="card text-center">
            <div class="card">
              <div class="card-header">Student Management Section</div>
              <div class="card-body">
                <h5 class="card-title">
                  You can manage each student from this section.
                </h5>
                <p class="card-text">
                  Add, Delete and Update faculty from here.
                </p>
                <a href="/" class="btn btn-success m-2">
                  Update Student
                </a>
                <a href="/RegisterStudent" class="btn btn-primary m-2">
                  Add Student
                </a>
                <a href="/" class="btn btn-danger">
                  Remove Student
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card text-center">
            <div class="card-header">Teacher Management Section</div>
            <div class="card-body">
              <h5 class="card-title">
                You can manage faculty from this section.
              </h5>
              <p class="card-text">Add, Delete and Update faculty from here.</p>
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
      </div>

      <div className="d-flex justify-content-center row m-5">
        <div className="col-md-6">
          <div class="card text-center">
            <div class="card-header">Notice Board Section</div>
            <div class="card-body">
              <h5 class="card-title">You can add, remove notices from here.</h5>
              <p class="card-text">
                Note that published notices will be visible for all people in
                your orginazation.
              </p>
              <a href="/" class="btn btn-primary m-2">
                Add Notice
              </a>
              <a href="/" class="btn btn-success">
                View Notice
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card text-center">
            <div class="card-header">Course Section</div>
            <div class="card-body">
              <h5 class="card-title">
                You can manage courses from this section.
              </h5>
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
      </div>
    </div>
  );
}
