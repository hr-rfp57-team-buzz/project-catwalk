import React, { useState, useEffect } from 'react';
import RatingStars from './RatingStars.jsx';
import ReviewProductBreakdown from './ReviewProductBreakdown.jsx';

let Rating = ({reviewMeta, averageRating, scrape, totalRatings, wasIClicked}) => {


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

    <div onClick={wasIClicked} className="ratingOverview">

      <div className="reviewStarsContainer">
        <h1 className="reviewInlineBlock pad15horz">{averageRating}</h1>
        <span className="reviewInlineBlock">
          <RatingStars averageRating={averageRating} scrape={scrape} module="review"/>
        </span>
      </div>

      <div>
        <p className="pad15horz"><span id="numberOfHelpfulReviews">%NUM</span> of reviews recommend this product</p>
        <div className="reviewBarStats">
          <div className="reviewBarStarNumber reviewPointerRed">
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
          <div className="reviewBarStarNumber reviewPointerRed">
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
          <div className="reviewBarStarNumber reviewPointerRed">
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
          <div className="reviewBarStarNumber reviewPointerRed">
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
          <div className="reviewBarStarNumber reviewPointerRed">
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

      <div className="gridContainer2Col">
        <div>
          <br />
          <hr />
          <br />
        </div>
        <div></div>
      </div>

      <ReviewProductBreakdown scrape={scrape} reviewMeta={reviewMeta} />


    </div>

  );


};


export default Rating;