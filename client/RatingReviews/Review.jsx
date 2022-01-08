import React, { useState, useEffect } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import AddAReview from './AddAReview.jsx';
import TOKEN from '../../config.js';

let Review = ({reviews, setReviews, changeProdId, scrapeReview, prodId, reviewMeta, scrape, setListResort}) => {

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
      'photos': '[]'
    },
    'scrapeReview': true,
    'starIndex': 3
  }]);
  let [productName, setProuctName] = useState('Loading...');



  let window = document.getElementById('reviewAddWindow');

  let openAddReviewWindow = () => {
    window.style.visibility = 'visible';
  };

  let resortListBy = (e) => {
    setListResort(e.target.value);
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

  let getProductName = () => {
    let productNameGrab = document.getElementsByClassName('po-product-name')[0].innerHTML;
    setProuctName(productNameGrab);
  };

  useEffect(() => {
    revealHiddenReviews();
    setReviewsForSorting(reviews);
  }, [scrapeReview]);

  useEffect(() => {
    setTimeout(() => {
      getProductName();
    }, 2000);
  }, [prodId]);


  return (

    <div className="review">
      <AddAReview window={window} prodId={prodId} reviewMeta={reviewMeta} scrape={scrape} productName={productName}/>
      <p><span id="numberOfReviews">{numberOfReviews}</span> reviews, sorted by <select onChange={resortListBy} name='sortConditions' id='sortCondition'>
        <option value='relevant'>Relevant</option>
        <option value='helpful'>Helpful</option>
        <option value='newest'>Newest</option>
      </select></p>
      <hr />
      <div className="reviewPadBottom"></div>
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