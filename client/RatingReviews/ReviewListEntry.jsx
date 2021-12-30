import React, { useState, useEffect } from 'react';
import ReviewStars from './ReviewStars.jsx';

let ReviewListEntry = ({review, scrapeReview, starIndex}) => {

  let [reviewPhotos, setReviewPhotos] = useState([undefined]);

  let [responseFromSeller, setResponseFromSeller] = useState(null);
  let [responseFromSellerMessage, setResponseFromSellerMessage] = useState(null);

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
  }, [scrapeReview]);

  return (

    <div className="reviewCard">
      <div className="gridContainer2Col">
        <div className="gridItemLeft">
          <ReviewStars review={review} scrapeReview={scrapeReview} starIndex={starIndex} />
        </div>
        <div className="gridItemRight">
          <sub>{review.reviewer_name}, {review.date}</sub>
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
      <p>Was this review helpful?</p>
      <sub><a href="#">YES</a>  <a href="#">NO</a></sub>
      <br/><br/>
      <hr/>
      <br/><br/>
    </div>

  );

};



export default ReviewListEntry;