import React from 'react';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import Answer from './Answer.jsx';
import Accordion from './Accordion.jsx';

let QuestionsList = (props) => (
  <div className="questionCard">
    <ul>
      {props.filtered.length > 0
        ?
        <>
          {props.filtered.map(question =>
            <>
              <Question prodId={props.prodId} sort={props.sort} question={question} />
              <Accordion  prodId={props.prodId} answers={Object.entries(question.answers)}/>
            </>
          )}
        </>
        : null
      }
        <ul>
      {props.questions.map(question =>
        <>
          <Question prodId={props.prodId} sort={props.sort} key={question.question_id} question={question} prodName={props.prodName} />
          <Accordion prodId={props.prodId} answers={Object.entries(question.answers)}/>
        </>
      )}
    </ul>
    </ul>
  </div>
);

export default QuestionsList;