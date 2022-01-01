import React from 'react';
import AnswersList from './AnswersList.jsx';

const Question = (props) => (
  <>
  <div className="questions">
    <div className="q-line">
      <h4>Q: {props.question.question_body}</h4>
      {/* <span className="top-links"> */}
      <span className="top-links">
        <p className="top-line helpful">Helpful?</p>
        <a className="top-line helpful">
          Yes(
          {props.question.question_helpfulness})
          </a>
        <div id="line"></div>
        <a className="top-line">Add Answer</a>
      </span>
      {/* </span> */}
    </div>
    <div className="a-line">
      <AnswersList answers={Object.entries(props.question.answers)} />
    </div>
  </div>
  </>
);

export default Question;