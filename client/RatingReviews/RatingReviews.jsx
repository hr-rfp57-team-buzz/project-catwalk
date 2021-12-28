import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import Review from './Review.jsx';

let RatingReview = () => {
  //captain HOOKS
  let [reviews, setReviews] = useState([0]);
  let [reviewMeta, setReviewMeta] = useState(undefined);
  let [averageRating, setAverageRating] = useState('Loading...');
  let [scrape, setScrape] = useState(false);
  let [totalRatings, setTotalRatings] = useState(0);

  //to be hooked up to productId context
  let prodId = 40344;

  let getProdReviews = (prodId) => {
    axios.get(`/reviews/${prodId}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getProdReviewMeta = (prodId) => {
    setScrape(false);
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
        setTotalRatings(average);
        setAverageRating(Number(score / average).toFixed(1));
        setScrape(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProdReviews(prodId);
    getProdReviewMeta(prodId);
  }, []);

  return (
    <div id="ratings-reviews">
      <Rating reviewMeta={reviewMeta} averageRating={averageRating} scrape={scrape} totalRatings={totalRatings}/>
      <Review reviews={reviews} />
    </div>
  );

};





export default RatingReview;