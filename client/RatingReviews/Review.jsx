import React, { useState, useEffect } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import AddAReview from './AddAReview.jsx';
import axios from 'axios';
import TOKEN from '../../config.js';

let Review = ({reviews, setReviews, changeProdId, scrapeReview, prodId, reviewMeta, scrape}) => {

  let [reviewListArray, setReviewListArray] = useState([]);
  let [numberOfReviews, setNumberOfReviews] = useState('Loading...');
  let [reviewsForSorting, setReviewsForSorting] = useState([{
    'review': {
      'review_id': 841336,
      'rating': 5,
      'summary': 'Very good',
      'recommend': true,
      'response': null,
      'body': 'lorem ipsum',
      'date': '2021-09-22T00:00:00.000Z',
      'reviewer_name': 'tester',
      'helpfulness': 1,
      'photos': '[{…}, {…}]'
    },
    'scrapeReview': true,
    'starIndex': 3
  }]);


  let window = document.getElementById('reviewAddWindow');

  let openAddReviewWindow = () => {
    window.style.visibility = 'visible';
  };

  let resortListBy = (e) => {
    console.log(e.target.value);
    e.target.value;
  };

  let revealHiddenReviews = () => {
    if (!scrapeReview) {
      return;
    } else {
      setNumberOfReviews(reviews.length);
      setReviewListArray(document.getElementsByClassName('reviewCardHide'));

      for (var i = 0; i < reviewListArray.length; i++) {
        reviewListArray[i].classList.remove('reviewCardHide');
      }
    }
  };

  useEffect(() => {
    revealHiddenReviews();
    setReviewsForSorting(reviews);
  }, [scrapeReview]);


  return (

    <div className="review">
      <AddAReview window={window} prodId={prodId} reviewMeta={reviewMeta} scrape={scrape}/>
      <p><span id="numberOfReviews">{numberOfReviews}</span> reviews, sorted by <select onChange={resortListBy} name='sortConditions' id='sortCondition'>
        <option value='Helpful'>Default</option>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
        <option value='Relevant'>Relevant</option>
      </select></p>
      <hr />
      <div className="reviewCard">
        {reviews.map((review, index) => {
          if (index <= 1) {
            return <div key={`reviewCard${index}`} className="reviewCardShow">
              <ReviewListEntry review={review} scrapeReview={scrapeReview} key={index} starIndex={index} />
            </div>;
          } else {
            return <div key={`reviewCard${index}`} className="reviewCardHide">
              <ReviewListEntry review={review} scrapeReview={scrapeReview} key={index} starIndex={index} />
            </div>;
          }
        })}
      </div>
      <div className="gridContainer2Col">
        <div className="gridItemCenter">
          <button id="reviewMore" className="bottom-btn" onClick={revealHiddenReviews}>More Reviews</button>
          <button className="bottom-btn" onClick={changeProdId}>Change ProdId</button>
        </div>
        <div className="gridItemCenter">
          <button className="bottom-btn" onClick={openAddReviewWindow}>Add A Review +</button>
        </div>
      </div>
      <br/><br/>
    </div>

  );

};


export default Review;