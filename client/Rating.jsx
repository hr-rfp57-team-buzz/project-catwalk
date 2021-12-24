import React from 'react';

let Rating = () => (



  <div className="ratingOverview">

    <div>
      <h1>3.5 STARIMGS</h1>
    </div>


    <div>
      <p>NUM% of reviews recommend this product</p>
      <div class="reviewBarStats">
        <div class="reviewBarStarNumber">
          5 Stars
        </div>
        <div class="reviewBar">
          <div style={{width: '89%'}} class="reviewBarProgress"></div>
        </div>
      </div>
      <div class="reviewBarStats">
        <div class="reviewBarStarNumber">
          4 Stars
        </div>
        <div class="reviewBar">
          <div style={{width: '44%'}} class="reviewBarProgress"></div>
        </div>
      </div>
      <div class="reviewBarStats">
        <div class="reviewBarStarNumber">
          3 Stars
        </div>
        <div class="reviewBar">
          <div style={{width: '8%'}} class="reviewBarProgress"></div>
        </div>
      </div>
      <div class="reviewBarStats">
        <div class="reviewBarStarNumber">
          2 Stars
        </div>
        <div class="reviewBar">
          <div style={{width: '65%'}} class="reviewBarProgress"></div>
        </div>
      </div>
      <div class="reviewBarStats">
        <div class="reviewBarStarNumber">
          1 Stars
        </div>
        <div class="reviewBar">
          <div style={{width: '24%'}} class="reviewBarProgress"></div>
        </div>
      </div>
    </div>
  </div>


);


export default Rating;