import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppProvider.jsx';
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
  let [listResort, setListResort] = useState('relevant');
  // let [prodId, setProdId] = useState(40344);
  const [productId, setProductId, wasIClicked] = useContext(AppContext);


  //to be hooked up to productId context
  // let prodId = 40388;



  let changeProdId = () => {
    let prods = [40345, 40388, 40453, 40355, 40567, 40349, 40392, 40366];
    let randProd = prods[(Math.random() * prods.length) | 0];
    setProductId(randProd);
  };

  let getProdReviews = (prodId) => {
    if (prodId === null) {
      return;
    }
    setScrapeReview(false);
    axios.get(`/reviews/${prodId}`, {
      headers: {
        'sort': listResort
      }
    })
      .then((res) => {
        setReviews(res.data.results);
        setScrapeReview(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getProdReviewMeta = (prodId) => {
    if (prodId === null) {
      return;
    }
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
    getProdReviews(productId);
    getProdReviewMeta(productId);
  }, [productId]);

  useEffect(() => {
    getProdReviews(productId);
  }, [listResort]);

  return (
    <div onClick={wasIClicked} id="ratings-reviews">
      <Rating reviewMeta={reviewMeta} averageRating={averageRating} scrape={scrape} totalRatings={totalRatings}/>
      <Review reviews={reviews} changeProdId={changeProdId} scrapeReview={scrapeReview} prodId={productId} reviewMeta={reviewMeta} scrape={scrape} setListResort={setListResort}/>
    </div>
  );

};





export default RatingReview;