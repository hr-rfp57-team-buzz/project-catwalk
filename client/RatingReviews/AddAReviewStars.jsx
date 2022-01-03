import React, {useState, useEffect} from 'react';



let AddAReviewStars = ({setProductRating}) => {

  let overallScore = 0;

  let star5 = document.getElementById('5AddAReviewStars');
  let star4 = document.getElementById('4AddAReviewStars');
  let star3 = document.getElementById('3AddAReviewStars');
  let star2 = document.getElementById('2AddAReviewStars');
  let star1 = document.getElementById('1AddAReviewStars');
  let OverallScore = document.getElementById('reviewClickableStars');

  let starsArray = [star1, star2, star3, star4, star5];
  let classToEdit = 'reviewStarsFill';

  let classStripper = (elemArray, className) => {
    elemArray.forEach(elem => {
      elem.classList.remove(className);
    });
  };

  let setReviewStarsRating = (e) => {
    classStripper(starsArray, classToEdit);
    if (e.target.id === '1AddAReviewStars') {
      overallScore = 1;
      star1.classList.add(classToEdit);
    }
    if (e.target.id === '2AddAReviewStars') {
      overallScore = 2;
      star1.classList.add(classToEdit);
      star2.classList.add(classToEdit);
    }
    if (e.target.id === '3AddAReviewStars') {
      overallScore = 3;
      star1.classList.add(classToEdit);
      star2.classList.add(classToEdit);
      star3.classList.add(classToEdit);
    }
    if (e.target.id === '4AddAReviewStars') {
      overallScore = 4;
      star1.classList.add(classToEdit);
      star2.classList.add(classToEdit);
      star3.classList.add(classToEdit);
      star4.classList.add(classToEdit);
    }
    if (e.target.id === '5AddAReviewStars') {
      overallScore = 5;
      star1.classList.add(classToEdit);
      star2.classList.add(classToEdit);
      star3.classList.add(classToEdit);
      star4.classList.add(classToEdit);
      star5.classList.add(classToEdit);
    }
    setProductRating(overallScore);

  };

  return (
    <div onClick={setReviewStarsRating} class="reviewClickableStars">
      <div className="reviewStarsContainer">
        <div className="reviewInlineBlock">
          <div className="reviewStars">
            <i className="fas fa-star reviewStarsNoFill"></i>
            <i id='1AddAReviewStars' className="fas fa-star"></i>
          </div>
        </div>
        <div className="reviewInlineBlock">
          <div className="reviewStars">
            <i className="fas fa-star reviewStarsNoFill"></i>
            <i id='2AddAReviewStars' className="fas fa-star"></i>
          </div>
        </div>
        <div className="reviewInlineBlock">
          <div className="reviewStars">
            <i className="fas fa-star reviewStarsNoFill"></i>
            <i id='3AddAReviewStars' className="fas fa-star"></i>
          </div>
        </div>
        <div className="reviewInlineBlock">
          <div className="reviewStars">
            <i className="fas fa-star reviewStarsNoFill"></i>
            <i id='4AddAReviewStars' className="fas fa-star"></i>
          </div>
        </div>
        <div className="reviewInlineBlock">
          <div className="reviewStars">
            <i className="fas fa-star reviewStarsNoFill"></i>
            <i id='5AddAReviewStars' className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>

  );



};





export default AddAReviewStars;