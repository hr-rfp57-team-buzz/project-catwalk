import React, { useState, useEffect } from 'react';


let RatingStars = ({review}) => {

  console.log(review);

  return (

    <div className="reviewStarsContainer">
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i className="fas fa-star reviewStarsFill"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i className="fas fa-star reviewStarsFill"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i className="fas fa-star reviewStarsFill"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i className="fas fa-star reviewStarsFill"></i>
        </div>
      </div>
      <div className="reviewInlineBlock">
        <div className="reviewStars">
          <i className="fas fa-star reviewStarsNoFill"></i>
          <i style={{width: '21px'}} className="fas fa-star reviewStarsFill"></i>
        </div>
      </div>
    </div>

  );


};



export default RatingStars;