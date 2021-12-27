import React from 'react';
import axios from 'axios';

import Question from './Question.jsx';

// let retrieveQuestions = () => {
//   axios({
//     method: 'get',
//     url:https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=40344
//   })
// }

let QuestionsList = (props) => (

  <div className="questionCard">
    <Question question={props.question}/>
  </div>
);


export default QuestionsList;