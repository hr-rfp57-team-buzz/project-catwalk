import React, { useState, useEffect } from 'react';


let ReviewStars = ({review, scrapeReview, starIndex}) => {

  let classStripper = (elem, classArray) => {
    classArray.forEach(function(item) {
      elem.classList.remove(item);
    });
  };

  let stripArray = ['reviewStarsFill', 'reviewStarsFill75', 'reviewStarsFill50', 'reviewStarsFill25'];

  let star5 = document.getElementById(`5star${starIndex}`);
  let star4 = document.getElementById(`4star${starIndex}`);
  let star3 = document.getElementById(`3star${starIndex}`);
  let star2 = document.getElementById(`2star${starIndex}`);
  let star1 = document.getElementById(`1star${starIndex}`);

  let fillStars = (averageRating) => {
    classStripper(star5, stripArray);
    classStripper(star4, stripArray);
    classStripper(star3, stripArray);
    classStripper(star2, stripArray);
    classStripper(star1, stripArray);
    if (averageRating === 5) {
      star5.classList.add('reviewStarsFill');
      star4.classList.add('reviewStarsFill');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 5 && averageRating > 4.5) {
      star5.classList.add('reviewStarsFill75');
      star4.classList.add('reviewStarsFill');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 4.5) {
      star5.classList.add('reviewStarsFill50');
      star4.classList.add('reviewStarsFill');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 4.5 && averageRating > 4) {
      star5.classList.add('reviewStarsFill25');
      star4.classList.add('reviewStarsFill');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 4) {
      star4.classList.add('reviewStarsFill');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 4 && averageRating > 3.5) {
      star4.classList.add('reviewStarsFill75');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 3.5) {
      star4.classList.add('reviewStarsFill50');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 3.5 && averageRating > 3) {
      star4.classList.add('reviewStarsFill25');
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 3) {
      star3.classList.add('reviewStarsFill');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 3 && averageRating > 2.5) {
      star3.classList.add('reviewStarsFill75');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 2.5) {
      star3.classList.add('reviewStarsFill50');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 2.5 && averageRating > 2) {
      star3.classList.add('reviewStarsFill25');
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 2) {
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 2 && averageRating > 1.5) {
      star2.classList.add('reviewStarsFill75');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 1.5) {
      star2.classList.add('reviewStarsFill50');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 1.5 && averageRating > 1) {
      star2.classList.add('reviewStarsFill');
      star1.classList.add('reviewStarsFill');
    } else if (averageRating === 1) {
      star1.classList.add('reviewStarsFill');
    } else if (averageRating < 1 && averageRating > 0.5) {
      star1.classList.add('reviewStarsFill75');
    } else if (averageRating === 0.5) {
      star1.classList.add('reviewStarsFill50');
    } else if (averageRating < 0.5) {
      star1.classList.add('reviewStarsFill25');
    } else {
      return;
    }
  };


  let setStars = () => {
    if (!scrapeReview) {
      return;
    } else {
      fillStars(review.rating);
    }
  };

  useEffect(() => {
    setStars();
  }, [review, scrapeReview]);

  return (

    <div className="reviewStarsContainer">
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i id={`1star${starIndex}`} className="fas fa-star"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i id={`2star${starIndex}`} className="fas fa-star"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i id={`3star${starIndex}`} className="fas fa-star"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i id={`4star${starIndex}`} className="fas fa-star"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i id={`5star${starIndex}`} className="fas fa-star"></i>
        </div>
      </div>
    </div>

  );


};



export default ReviewStars;