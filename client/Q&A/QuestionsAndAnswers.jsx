import React, { useState, useEffect } from 'react';
import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import LoadAnswers from './LoadAnswers.jsx';
import MoreAnswered from './MoreAnsweredQs.jsx';
import AddQuestion from './AddQuestion.jsx';

let productId = 40344;

let getQuestions = (id) => {
  axios.get('/qa/:product_id/questions', {
    params: {product_id: id},
    responseType: 'json',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error('Error! ', err);
  });
}

let QuestionsAndAnswers = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getQuestions(productId);
  }, []);

  return (
    <>
      <SearchBar />
      <div className="questions-list">
        <QuestionsList question={question}/>
      </div>
      <LoadAnswers />
      <MoreAnswered />
      <AddQuestion />
    </>
  )
};

export default QuestionsAndAnswers;