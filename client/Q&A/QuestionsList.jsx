import React from 'react';
import Question from './Question.jsx';

let QuestionsList = (props) => (
  <div className="questionCard">
    <ul>
      {props.questions.map(question =>
        <Question question={question}/>
      )}
    </ul>
  </div>
);

export default QuestionsList;