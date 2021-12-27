import React, { useState } from 'react';

import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';

let QuestionsAndAnswers = () => {

  const [question, setQuestion] = useState('Is it TTS?');

  return (
    <>
      <SearchBar />
      <div className="questions-list">
        <QuestionsList question={question}/>
      </div>
    </>
  )
};

export default QuestionsAndAnswers;