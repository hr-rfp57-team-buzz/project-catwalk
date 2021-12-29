import React from 'react';

const Answer = (props) => {
  let date = props.answer[1].date;
  let newDate = (new Date(date)).toDateString().slice(4);

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
        <p className="bottom-links helpful">Helpful?</p>
        <a className="bottom-links helpful">Yes({props.answer[1].helpfulness})</a>
        <div id="line"></div>
        <a className="bottom-links">Report</a>
      </div>
    </>
  )
};

export default Answer;