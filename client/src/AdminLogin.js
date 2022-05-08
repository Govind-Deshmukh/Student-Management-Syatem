import React from 'react'
import GeneralHeader from './webComponents/GeneralHeader';

export default function AdminLogin() {
  return (
    <div>
      <GeneralHeader />
      <div className="text-center mt-5">
        <h1>MGM's College Engineering, Nanded</h1>
        <h2 className="text-muted">Student Management System CASERP</h2>
        <h3><mark>Admin Login Page</mark></h3>
        <p className='text-muted'>If you are admin of orginization then login here for control</p>
        <div className="mt-4 border-bottom-heading w-50"></div>
      </div>
      <div>
        <form className="student-form">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
