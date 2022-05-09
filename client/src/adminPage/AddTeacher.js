import React from "react";
import "./common.css";
import GeneralHeader from "../webComponents/GeneralHeader";
export default function AddTeacher() {
  return (
    <div>
      <GeneralHeader />
      <div className="text-center m-5">
        <h1>
          <mark>Fill This Form to Create New Faculty Account</mark>
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <form action="">
          <div className="row form-group m-4">
            <label>Enter Firstname</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Firstname"
            />
          </div>

          <div className="row form-group m-4">
            <label>Enter Lastname</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Surname"
            />
          </div>

          <div className="row form-group m-4">
            <label>Enter EmailID of Teacher</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="row form-group m-4">
            <label>Enter Teacher ID</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student ID"
            />
          </div>
          <div className="row form-group m-4">
            <label>Enter Phone Number Of Teacher</label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter Contact Number"
            />
          </div>

          <div className="row form-group m-4">
            <label>Select Department of Teaching</label>
            <select className="form-control" id="">
              <option value="1">Computer Science and Engineering</option>
              <option value="2">Civil Engineering</option>
              <option value="3">Information Technology</option>
              <option value="4">
                Electronics and Telecommunication Engineering
              </option>
              <option value="5">Mechnical Engineering</option>
            </select>
          </div>

          <div className="form-group m-4">
            <label className="mb-2">Select Acadamic Year of Teaching</label>{" "}
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="year1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                First Year
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="year2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Second Year
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="year3"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Third Year
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="year3"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Final Year
              </label>
            </div>
          </div>
          <div className="row form-group m-4">
            <label>Select Course</label>
            <p>
              Here we have to add all subject names of all departmants 'all
              branch' with multi select option
            </p>
            <p>
              option because single teacher can be allocketed to teach multiple
              subject
            </p>
          </div>

          <div className="row form-group m-4 m-4">
            <a href="/" className="btn btn-success w-100">
              Add Teacher to Database
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
