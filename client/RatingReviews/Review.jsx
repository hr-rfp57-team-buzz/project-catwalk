import React, { useState, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import axios from 'axios';
import TOKEN from '../../config.js';

let Review = ({reviews, setReviews}) => {

  // let [reviews, setReviews] = useState([0]);

  // let prodId = 40345;

  // let getProdReviews = (prodId) => {
  //   axios.get(`/reviews/${prodId}`)
  //     .then((res) => {
  //       // console.log(res);
  //       setReviews(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // React.useEffect(() => {
  //   getProdReviews(prodId);
  // }, []);

  return (

    <div className="review">
      <p>NUM reviews, sorted by <select name='sortConditions' id='sortCondition'>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
        <option value='Relevant'>Relevant</option>
      </select></p>
      <hr />
      {reviews.map((review, index) => {
        return <ReviewListEntry review={review} key={index} />;
      })}
      <div className="gridContainer2Col">
        <div className="gridItemCenter"><button>More Reviews</button></div>
        <div className="gridItemCenter"><button>Add A Review +</button></div>
      </div>
      <br/><br/>
    </div>

  );

};


export default Review;