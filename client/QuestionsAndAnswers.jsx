import React, { useState } from 'react';

import QuestionsList from './QuestionsList.jsx';

let QuestionsAndAnswers = () => {

  const [question, setQuestion] = useState('How TTS is this sweatshirt?');

  return (
    <QuestionsList question={question}/>
  )
};

export default QuestionsAndAnswers;