import React from "react";

export default function NoticeSection() {
  return (
    <div>
      <div class="card">
        <div class="card-header">Notice Board Section</div>
        <div class="card-body">
          <h5 class="card-title">You can add, remove notices from here.</h5>
          <p class="card-text">
            Note that published notices will be visible for all people in your orginazation.
          </p>
          <a href="/" class="btn btn-primary m-5">
            Add Notice
          </a>
          <a href="/" class="btn btn-success m-5">
            View Notice
          </a>
        </div>
      </div>
    </div>
  );
}
