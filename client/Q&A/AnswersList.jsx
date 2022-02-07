import React, { useState } from 'react';
import Answer from './Answer.jsx';
import Accordion from './Accordion.jsx';


let AnswersList = (props) => {

  // const [answersList, setAnswers] = useState([]);

  // // let sorted = props.sort(props.answers);
  // // console.log('sorted in AnswersList: line 11 ', sorted);
  // for (let i = 0; i < props.answers.length; i++) {
  //   let temp;
  //   // let mostHelpful;
  //   let currAnswer = props.answers[i];
  //   if (currAnswer[1].answerer_name === 'Seller') {
  //     answersList.unshift(currAnswer);
  //     // mostHelpful = currAnswer[1].helpfulness;
  //     // console.log(mostHelpful);
  //   }
  //     for (let j = 1; j < props.answers.length; j++) {
  //       let nextAnswer = props.answers[j];
  //       if (currAnswer[1].helpfulness > nextAnswer[1].helpfulness) {
  //         answersList.push(currAnswer);
  //         // mostHelpful = currAnswer[1].mostHelpful;
  //       }
  //     }
  //   answersList.push(currAnswer);
  // }
  return (
  <div className="questionCard">
    {props.answersList ? console.log('sorted in', props.sort(props.answersList.slice())) : null}
      <ul>
        {props.answers.slice(0, 2).map(answer => {
          return <Answer key={answer[0]} answer={answer}/>
        })}
      </ul>
    </div>
  )
};

export default AnswersList;