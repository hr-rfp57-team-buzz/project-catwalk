import React, { useState, useEffect, useContext } from 'react';
import ReviewStars from './ReviewStars.jsx';
import axios from 'axios';
import { AppContext } from '../AppProvider.jsx';

let ReviewListEntry = ({review, scrapeReview, starIndex}) => {

  let [reviewPhotos, setReviewPhotos] = useState([undefined]);

  let [responseFromSeller, setResponseFromSeller] = useState(null);
  let [responseFromSellerMessage, setResponseFromSellerMessage] = useState(null);
  let [newDate, setNewDate] = useState('Loading...');
  let [reviewHelpNum, setReviewHelpNum] = useState('');
  let [recommendedReview, setRecommendedReview] = useState(<></>);
  let [doYouRecommend, setDoYouRecommend] = useState('Yes');
  let [doYouReport, setDoYouReport] = useState('No (Report Review)');
  let [dyRecFlag, setDyRecFlag] = useState(false);
  let [dyRepFlag, setDyRepFlag] = useState(false);
  const [productId] = useContext(AppContext);

  // let newDate = (new Date(review.date)).toDateString().slice(4);

  let generateSellerResponse = () => {
    setResponseFromSeller(null);
    setResponseFromSellerMessage(null);
    if (!scrapeReview) {
      return;
    }
    if (review.response === null) {
      return;
    }
    if (review.response === '') {
      return;
    }
    setResponseFromSeller(<span className="pad15">Response From Seller: </span>);
    setResponseFromSellerMessage(<span className="pad15">{review.response}</span>);
  };

  let wasThisReviewHelpful = (e) => {
    if (dyRecFlag) {
      return;
    }
    console.log(review.review_id);
    axios.put(`/reviews/${review.review_id}/helpful`)
      .then(res => {
        console.log(res);
        // e.target.innerHTML = 'Thank you for your feedback!';
        setDoYouRecommend('Thank you for your feedback!');
        let updatedScore = reviewHelpNum;
        updatedScore++;
        setReviewHelpNum(updatedScore);
      })
      .catch(err => {
        console.log(err);
      });
    setDyRecFlag(true);
  };

  let reportReview = (e) => {
    if (dyRepFlag) {
      return;
    }
    axios.put(`/reviews/${review.review_id}/report`)
      .then(res => {
        console.log(res);
        // e.target.innerHTML = 'Review Reported!';
        setDoYouReport('Review Reported');
      })
      .catch(err => {
        console.log(err);
      });
    setDyRepFlag(true);
  };

  let isThisARecommendedProduct = () => {
    if (!scrapeReview) {
      return;
    } else {
      setRecommendedReview(<></>);
      if (review.recommend === true) {
        setRecommendedReview(<span className="reviewSlider">  ✓  </span>);
      }
    }
  };


  let createPhotoArray = () => {
    if (!scrapeReview) {
      return;
    } else {
      setReviewPhotos(review.photos);
    }
  };


  useEffect(() => {
    createPhotoArray();
    generateSellerResponse();
    setNewDate((new Date(review.date)).toDateString().slice(4));
    setReviewHelpNum(review.helpfulness);
    isThisARecommendedProduct();
  }, [scrapeReview]);

  useEffect(() => {
    setDoYouRecommend('Yes');
    setDoYouReport('No (Report Review)');
    setDyRecFlag(false);
    setDyRepFlag(false);
  }, [productId]);



  return (

    <div>
      <div className="gridContainer2Col">
        <div className="gridItemLeft">
          <ReviewStars review={review} scrapeReview={scrapeReview} starIndex={starIndex} />
        </div>
        <div className="gridItemRight">
          <sub>{review.reviewer_name} {recommendedReview}, {newDate}</sub>
        </div>
      </div>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      <div class="responseFromSeller">
        <h4>{responseFromSeller}</h4>
        <p>{responseFromSellerMessage}</p>
      </div>
      <div className="reviewPhotosContainer">
        {reviewPhotos.map((photo, index) => {
          if (photo === undefined) {
            return;
          } else {
            return <img className="reviewPhotos" src={photo.url} alt={photo.id} key={index} />;
          }
        })}
      </div>
      <br/>
      <p>Was this review helpful? ({reviewHelpNum})</p>
      <sub id={`reviewHelpful${starIndex}`}><i><span id={`reviewHelpful${starIndex}Yes`} className="reviewPointerRed" value='Yes' onClick={wasThisReviewHelpful}>{doYouRecommend} <i class="fas fa-thumbs-up"></i></span><span> || </span> <span value="No" className="reviewPointerRed" onClick={reportReview}>{doYouReport}</span> </i></sub>
      <br/><br/>
      <hr/>
      <br/><br/>
    </div>

  );

};



export default ReviewListEntry;