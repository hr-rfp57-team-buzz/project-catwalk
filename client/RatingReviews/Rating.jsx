import React, { useState, useEffect } from 'react';

let Rating = ({reviewMeta, averageRating, scrape, totalRatings}) => {


  let starSet = () => {
    let width = 0;
    if (!scrape) {
      return;
    } else {
      for (var key in reviewMeta.ratings) {
        let progressBar = document.getElementById(`${key}progress`);
        let numberOfReviews = document.getElementById(`${key}reviewNumber`);
        let progressWidth = (reviewMeta.ratings[key] / totalRatings) * 100;
        progressBar.style.width = `${Math.round(progressWidth)}%`;
        numberOfReviews.innerHTML = `(${reviewMeta.ratings[key]})`;
      }
    }
  };

  useEffect(() => {
    starSet();
  });



  return (

    <div className="ratingOverview">

      <div>
        <h1 >{averageRating} STARIMGS</h1>
      </div>

      <div>
        <p>NUM% of reviews recommend this product</p>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber">
            5 Stars
          </div>
          <div class="reviewBar">
            <div id="5progress" className='reviewBarProgress'></div>
          </div>
          <div className="reviewBarReviewNumber">
            <p id="5reviewNumber">(0)</p>
          </div>
        </div>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber">
            4 Stars
          </div>
          <div className="reviewBar">
            <div id="4progress" className='reviewBarProgress'></div>
          </div>
          <div className="reviewBarReviewNumber">
            <p id="4reviewNumber">(0)</p>
          </div>
        </div>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber">
            3 Stars
          </div>
          <div className="reviewBar">
            <div id="3progress" className='reviewBarProgress'></div>
          </div>
          <div className="reviewBarReviewNumber">
            <p id="3reviewNumber">(0)</p>
          </div>
        </div>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber">
            2 Stars
          </div>
          <div className="reviewBar">
            <div id="2progress" className='reviewBarProgress'></div>
          </div>
          <div className="reviewBarReviewNumber">
            <p id="2reviewNumber">(0)</p>
          </div>
        </div>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber">
            1 Stars
          </div>
          <div className="reviewBar">
            <div id="1progress" className='reviewBarProgress'></div>
          </div>
          <div className="reviewBarReviewNumber">
            <p id="1reviewNumber">(0)</p>
          </div>
        </div>
      </div>
    </div>

  );


};


export default Rating;