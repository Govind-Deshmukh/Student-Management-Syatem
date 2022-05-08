import React from "react";
import "./common.css";
import GeneralHeader from "../webComponents/GeneralHeader";
export default function AddStudent() {
  return (
    <div>
      <GeneralHeader />
      <div className="text-center m-5">
        <h1>
          <mark>Fill This Form to Create New Student Account</mark>
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
            <label>Enter Midname</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Midname"
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
            <label>Enter EmailID of Student</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="row form-group m-4">
            <label>
              Enter Student ID (S1032190220)
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student ID"
            />
          </div>
          <div className="row form-group m-4">
            <label>
              Enter Phone Number Of Student
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="row form-group m-4">
            <label>
              Enter Roll Number of Student
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter Roll Number"
            />
          </div>
          <div className="row form-group m-4">
            <label>Select Branch</label>
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
          <div className="row form-group m-4">
            <label>Select Acadamic Year</label>
            <select className="form-control" id="">
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Final Year</option>
            </select>
          </div>
          <div className="row form-group m-4 m-4">
            <a href="/" className="btn btn-success w-100">
              Add Student to Database
            </a>
          
          </div>
        </form>
      </div>
    </div>
  );
}
