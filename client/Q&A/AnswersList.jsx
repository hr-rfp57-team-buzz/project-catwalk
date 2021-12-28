import React from 'react';
import Answer from './Answer.jsx';

let AnswersList = (props) => {
  for(var key in props.answers) {
    console.log(props.answers[key])
    return;
  }
  return (
    // <div className="questionCard">
      <ul>
        {/* {props.answers.map(answer =>
          <Answer answer={answer}/>
        )} */}
      </ul>
    // </div>
  )
};

export default AnswersList;