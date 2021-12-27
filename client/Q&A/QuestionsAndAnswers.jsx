import React, { useState } from 'react';

import QuestionsList from './QuestionsList.jsx';

let QuestionsAndAnswers = () => {

  const [question, setQuestion] = useState('Is it TTS?');

  return (
    <div className="questions-list">
      <QuestionsList question={question}/>
    </div>
  )
};

export default QuestionsAndAnswers;