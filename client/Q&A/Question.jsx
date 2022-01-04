import React, { useState } from 'react';

import AnswersList from './AnswersList.jsx';
import AddAnswerModal from './AddAnswerModal';

const Question = (props) => {
  const [count, setCount] = useState(props.question.question_helpfulness);
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div className="questions">
        <div className="q-line">
          <h4>Q: {props.question.question_body}</h4>
          <span className="top-links">
            <p className="top-line helpful">Helpful?</p>
            <h5 style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={() => { setCount(count + 1); }} className="top-line helpful links">
              Yes({ count })
              </h5>
            <div id="line"></div>
            <a style={{ textDecoration: 'underline', cursor: 'pointer'}} className="top-line links" onClick={() => { setVisible(!isVisible)} }>Add Answer</a>
          </span>
        </div>
            {isVisible ? <AddAnswerModal prodName={props.prodName} qBody={props.question.question_body}/> : null}
        <div className="a-line">
          <AnswersList answers={Object.entries(props.question.answers)} />
        </div>
      </div>
    </>
  )
};

export default Question;