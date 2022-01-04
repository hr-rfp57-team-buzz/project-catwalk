import React from 'react';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import Answer from './Answer.jsx';
import Accordion from './Accordion.jsx';

let QuestionsList = (props) => (
  <>
    <div className="questionCard">
      <ul>
        {props.questions.map(question =>
          <>
            <Question key={question.question_id} question={question} prodName={props.prodName} />
            <Accordion answers={Object.entries(question.answers)}/>
            {/* <AnswersList answers={question.answers} /> */}
          </>
        )}
      </ul>
    </div>
    {/* {props.questions.map(question =>
      <AnswersList answers={question.answers} />
    )} */}
  </>
);

export default QuestionsList;