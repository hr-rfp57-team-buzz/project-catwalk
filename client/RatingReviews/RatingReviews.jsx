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
  let [scrapeReview, setScrapeReview] = useState(false);
  let [totalRatings, setTotalRatings] = useState(0);
  let [prodId, setProdId] = useState(40344);

  //to be hooked up to productId context
  // let prodId = 40388;

  let changeProdId = () => {
    let prods = [40345, 40388, 40453, 40355, 40567, 40349, 40392, 40366];
    let randProd = prods[(Math.random() * prods.length) | 0];
    setProdId(randProd);
  };

  let getProdReviews = (prodId) => {
    setScrapeReview(false);
    axios.get(`/reviews/${prodId}`)
      .then((res) => {
        setReviews(res.data.results);
        setScrapeReview(true);
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
  }, [prodId]);

  return (
    <div id="ratings-reviews">
      <Rating reviewMeta={reviewMeta} averageRating={averageRating} scrape={scrape} totalRatings={totalRatings}/>
      <Review reviews={reviews} changeProdId={changeProdId} scrapeReview={scrapeReview} />
    </div>
  );

};





export default RatingReview;