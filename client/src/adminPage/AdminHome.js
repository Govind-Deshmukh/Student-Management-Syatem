import React from "react";

import AddStudent from "./AddStudent";
import GeneralHeader from "../webComponents/GeneralHeader";
import AddTeacher from "./AddTeacher";
import NoticeSection from "./NoticeSection";
export default function AdminHome() {
  return (
    <div>
      <GeneralHeader />
      <div className="d-flex justify-content-center row m-5">
        <div className="col-md-6">
          <AddStudent />
        </div>
        <div className="col-md-6">
          <AddTeacher />
        </div>
      </div>
      <div className="d-flex justify-content-center row m-5">
        <div className="col-md-12">
          <NoticeSection />
        </div>
      </div>
    </div>
  );
}
