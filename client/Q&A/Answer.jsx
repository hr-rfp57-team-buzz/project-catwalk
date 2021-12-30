import React, { useState } from 'react';

const Answer = (props) => {
  let date = props.answer[1].date;
  let newDate = (new Date(date)).toDateString().slice(4);

  const [count, setCount] = useState(props.answer[1].helpfulness);

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
          <h5 style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={() => { setCount(count + 1)}}
          className="helpful">Yes({ count })</h5>
          <div id="line"></div>
          <a className="bottom-links">Report</a>
        </div>
      </div>
    </>
  )
};

export default Answer;