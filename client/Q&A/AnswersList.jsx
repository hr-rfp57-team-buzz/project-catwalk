import React from 'react';
import Answer from './Answer.jsx';
import Accordion from './Accordion.jsx';

let AnswersList = (props) => (
  <div className="questionCard">
      <ul>
        {props.answers.slice(0, 2).map(answer =>
          <>
            <Answer answer={answer}/>
            {/* <Accordion answer={answer} /> */}
          </>
        )}
      </ul>
    </div>
);

export default AnswersList;