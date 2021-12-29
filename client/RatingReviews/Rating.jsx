import React, { useState, useEffect } from 'react';

let Rating = ({reviewMeta, averageRating, scrape, totalRatings}) => {


  let statSet = () => {
    let width = 0;
    if (!scrape) {
      return;
    } else {
      //generate how many people recommend this prodcut
      let numberOfHelpfulReviews = document.getElementById('numberOfHelpfulReviews');
      let numHelpRevRaw = ((Number(reviewMeta.recommended.true) / (Number(reviewMeta.recommended.false) + Number(reviewMeta.recommended.true))) * 100);
      let numHelpRevPercentage = Math.round(numHelpRevRaw);
      numberOfHelpfulReviews.innerHTML = `${numHelpRevPercentage}%`;
      //on every pass generage data for progress bar width & how many reviews for each rating have been submitted
      for (var key in reviewMeta.ratings) {
        let progressBar = document.getElementById(`${key}progress`);
        let progressWidth = (reviewMeta.ratings[key] / totalRatings) * 100;
        progressBar.style.width = `${Math.round(progressWidth)}%`;
        let numberOfReviews = document.getElementById(`${key}reviewNumber`);
        numberOfReviews.innerHTML = `(${reviewMeta.ratings[key]})`;
      }
    }
  };

  useEffect(() => {
    statSet();
  });



  return (

    <div className="ratingOverview">

      <div>
        <h1 >{averageRating} STARIMGS</h1>
      </div>

      <div>
        <p><span id="numberOfHelpfulReviews">%NUM</span> of reviews recommend this product</p>
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