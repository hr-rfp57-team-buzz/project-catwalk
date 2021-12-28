import React from 'react';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import Answer from './Answer.jsx';

let QuestionsList = (props) => (
  <>
    <div className="questionCard">
      <ul>
        {props.questions.map(question =>
          <>
            <Question question={question}/>
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