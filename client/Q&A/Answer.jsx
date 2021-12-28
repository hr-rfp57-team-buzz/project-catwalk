import React from 'react';

const Answer = (props) => (
  <>
    <h4>A:</h4>
    {/* <p>{props.answers.body}</p> */}
  <div className="bottom-line">
    <h6>By User1234, January 1, 2019</h6>
    <div id="line"></div>
    <p className="bottom-links helpful">Helpful?</p>
    <a className="bottom-links helpful">Yes(2)</a>
    <div id="line"></div>
    <a className="bottom-links">Report</a>
  </div>
  </>
);

export default Answer;