import React from 'react'
import './css/GeneralHeader.css'

export default function generalHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Online Class
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://mgmcen.ac.in">
                  College
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://student.dbatuapps.in/">
                  DBatu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://mgmcen.ac.in/contact.aspx">
                  Contact
                </a>
              </li>
  
            </ul>

            <a className="btn btn-outline-primary" href='/adminLogin'>
              Log In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
