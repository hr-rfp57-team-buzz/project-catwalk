import React from 'react';
import Question from './Question.jsx';

let QuestionsList = (props) => (
  <div className="questionCard">
    <Question question={props.question}/>
  </div>
)

export default QuestionsList;