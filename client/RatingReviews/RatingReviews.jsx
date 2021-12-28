import React, { useState } from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import Review from './Review.jsx';

let RatingReview = () => {
  //captain HOOKS
  let [reviews, setReviews] = useState([0]);

  //to be hooked up to productId context
  let prodId = 40345;

  let getProdReviews = (prodId) => {
    axios.get(`/reviews/${prodId}`)
      .then((res) => {
        // console.log(res);
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getProdReviews(prodId);
  }, []);

  return (
    <div id="ratings-reviews">
      <Rating />
      <Review reviews={reviews} />
    </div>
  );

};





export default RatingReview;