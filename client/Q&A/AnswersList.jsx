import React, { useState } from 'react';
import Answer from './Answer.jsx';
import Accordion from './Accordion.jsx';

let AnswersList = (props) => {

  const [answersList, setAnswers] = useState([]);

  for (let i = 0; i < props.answers.length; i++) {
    let temp;
    let mostHelpful;
    let currAnswer = props.answers[i];
    if (currAnswer[1].answerer_name === 'Seller') {
      answersList.unshift(currAnswer);
      mostHelpful = currAnswer[1].helpfulness;
      console.log(mostHelpful);
    } else if (currAnswer[1].helpfulness > mostHelpful) {
      answersList.push(currAnswer);
      mostHelpful = currAnswer[1].mostHelpful;
    }
  }
  return (
  <div className="questionCard">
      <ul>
        {answersList.slice(0, 2).map(answer => {
          return answer.answerer_name === 'Seller' ? <Answer answer={answer}/> : <Answer answer={answer}/>
        }
          // <>
          //   <Answer answer={answer}/>
          // </>
        )}
      </ul>
    </div>
  )
};

export default AnswersList;