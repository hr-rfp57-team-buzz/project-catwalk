import React, { useState, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import axios from 'axios';
import TOKEN from '../../config.js';

let Review = ({reviews, setReviews, changeProdId}) => {

  return (

    <div className="review">
      <p>NUM reviews, sorted by <select name='sortConditions' id='sortCondition'>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
        <option value='Relevant'>Relevant</option>
      </select></p>
      <hr />
      {reviews.map((review, index) => {
        return <ReviewListEntry review={review} key={index} />;
      })}
      <div className="gridContainer2Col">
        <div className="gridItemCenter"><button className="bottom-btn">More Reviews</button></div>
        <div className="gridItemCenter"><button className="bottom-btn" onClick={changeProdId}>Add A Review +</button></div>
      </div>
      <br/><br/>
    </div>

  );

};


export default Review;