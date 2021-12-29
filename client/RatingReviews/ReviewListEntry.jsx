import React, { useState, useEffect } from 'react';
import ReviewStars from './ReviewStars.jsx';

let ReviewListEntry = ({review, scrapeReview, starIndex}) => {

  let [reviewPhotos, setReviewPhotos] = useState([undefined]);

  let createPhotoArray = () => {
    if (!scrapeReview) {
      return;
    } else {
      setReviewPhotos(review.photos);
    }
  };


  useEffect(() => {
    createPhotoArray();
  }, [scrapeReview]);

  return (

    <div>
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
      <div hidden={true} class="responseFromSeller">
        <h4 className="pad15">Response from seller:</h4>
        <p className="pad15">re ultrices diam tincidunt at. Maecenas sit amet iaculis odio, a viverra felis. Aliquam sit amet</p>
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