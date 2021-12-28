import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import Review from './Review.jsx';

let RatingReview = () => {
  //captain HOOKS
  let [reviews, setReviews] = useState([0]);
  let [reviewMeta, setReviewMeta] = useState(undefined);
  let [averageRating, setAverageRating] = useState('Loading...');

  //to be hooked up to productId context
  let prodId = 40344;

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

  let getProdReviewMeta = (prodId) => {
    axios.get(`/reviews/${prodId}/meta`)
      .then((res) => {
        // console.log(res.data);
        setReviewMeta(res.data);
        let average = 0;
        let score = 0;
        for (var key in res.data.ratings) {
          average += Number(res.data.ratings[key]);
          score += Number(key) * Number(res.data.ratings[key]);
        }
        setAverageRating(Number(score / average).toFixed(1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // let generateAverageRating = () => {
  //   console.log('THIS LOGGED', reviewMeta.ratings);
  //   if (reviewMeta.ratings !== undefined) {
  //     let average = 0;
  //     for (var key in reviewMeta.ratings) {
  //       average += reviewMeta.ratings[key];
  //     }
  //     setAverageRating(average);
  //   } else {
  //     return;
  //   }
  // };

  useEffect(() => {
    getProdReviews(prodId);
    getProdReviewMeta(prodId);
  }, []);

  return (
    <div id="ratings-reviews">
      <Rating reviewMeta={reviewMeta} averageRating={averageRating} />
      <Review reviews={reviews} />
    </div>
  );

};





export default RatingReview;