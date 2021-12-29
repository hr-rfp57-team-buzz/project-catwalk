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
      {/* <h4>A:</h4>
      <p>Icing macaron bear claw jelly beans chocolate cake. Cookie oat cake chocolate halvah jelly cake cotton candy souuflé topping. Jujubes topping cake gummies lemon drops.</p> */}
    </div>
    {/* <div className="bottom-line">
      <div id="line"></div>
      <p className="bottom-links helpful">Helpful?</p>
      <a className="bottom-links helpful">Yes(2)</a>
      <div id="line"></div>
      <a className="bottom-links">Report</a>
    </div> */}
  </div>
  </>
);

export default Question;