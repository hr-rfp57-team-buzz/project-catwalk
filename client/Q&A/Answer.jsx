import React, { useState } from 'react';
import axios from 'axios';

const Answer = (props) => {
  let date = props.answer[1].date;
  let newDate = (new Date(date)).toDateString().slice(4);

  const [count, setCount] = useState(props.answer[1].helpfulness);
  const [reported, setReported] = useState(false);


  let reportAnswer = (id) => {
    props.answer[1].reported = true;
    axios.put('/qa/answers/:answer_id/report', {
      answer_id: id,
    })
    .then(response => {
      console.log('response: ', response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  let updateHelpfullness = (answer_id, helpfulnessCount) => {
    axios.put('/qa/answers/:answer_id/helpful', {
      answer_id: answer_id,
      count: helpfulnessCount
    })
    .then((response) => {
      console.log('Done.', response.data);
    })
    .catch((err) => {
      console.log('err in Answer.jsx', err);
    })
  }

  return (
    <>
      <div className="a-line">
        <h4>A:</h4>
        <p>{props.answer[1].body}</p>
      </div>
        {props.answer[1].photos.map(photo =>
        <a target="_blank" href={photo}>
          <img className='q-a-img' src={photo} alt={photo}></img>
        </a>
        )}
      <div className="bottom-line">
        <h6>By {props.answer[1].answerer_name}, </h6>
        <h6>{ newDate }</h6>
        <div id="line"></div>
        <div className="bottom-links">
          <h5>Helpful?</h5>
          <h5 style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={() => { setCount(count + 1); updateHelpfullness(props.answer[0], count + 1);}}
          className="links">Yes({ count })</h5>
          <div id="line"></div>
          <div className="bottom-links">
            <>
              {props.answer[1].reported ? 'Reported' :
              <h5 style={{ textDecoration: 'underline', cursor: 'pointer'}} className="links" onClick={() => { reportAnswer(props.answer[0]); setReported(!reported)}}>Report</h5>
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
};

export default Answer;