import React, {useState, useEffect} from 'react';


let ReviewProductBreakdown = ({scrape, reviewMeta}) => {




  return (

    <div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Size
        </div>
        <div className="reviewProductBreakdown">
          <div id="sizeSlider" className='reviewTextRight'>
            <span id={sizeSlider}>I</span>
          </div>
        </div>
      </div>
      <div className="reviewBarStats">
        <div className="reviewBarStarNumber"></div>
        <div className="gridContainer3Col">
          <div className="gridItemLeft">
            <sub>To Small</sub>
          </div>
          <div className="gridItemCenter">
            <sub>Perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>To Big</sub>
          </div>
        </div>
      </div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Width
        </div>
        <div className="reviewProductBreakdown">
          <div id="widthSlider" className='reviewTextRight'>
            <span>I</span>
          </div>
        </div>
      </div>
      <div className="reviewBarStats">
        <div className="reviewBarStarNumber"></div>
        <div className="gridContainer3Col">
          <div className="gridItemLeft">
            <sub>To Small</sub>
          </div>
          <div className="gridItemCenter">
            <sub>Perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>To Big</sub>
          </div>
        </div>
      </div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Comfort
        </div>
        <div className="reviewProductBreakdown">
          <div id="comfortSlider" className='reviewTextRight'>
            <span>I</span>
          </div>
        </div>
      </div>
      <div className="reviewBarStats">
        <div className="reviewBarStarNumber"></div>
        <div className="gridContainer3Col">
          <div className="gridItemLeft">
            <sub>poor</sub>
          </div>
          <div className="gridItemCenter">
            <sub>Perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>great</sub>
          </div>
        </div>
      </div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Length
        </div>
        <div className="reviewProductBreakdown">
          <div id="lengthSlider" className='reviewTextRight'>
            <span>I</span>
          </div>
        </div>
      </div>
      <div className="reviewBarStats">
        <div className="reviewBarStarNumber"></div>
        <div className="gridContainer3Col">
          <div className="gridItemLeft">
            <sub>To Short</sub>
          </div>
          <div className="gridItemCenter">
            <sub>Perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>To Long</sub>
          </div>
        </div>
      </div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Fit
        </div>
        <div className="reviewProductBreakdown">
          <div id="fitSlider" className='reviewTextRight'>
            <span>I</span>
          </div>
        </div>
      </div>
      <div className="reviewBarStats">
        <div className="reviewBarStarNumber"></div>
        <div className="gridContainer3Col">
          <div className="gridItemLeft">
            <sub>To Small</sub>
          </div>
          <div className="gridItemCenter">
            <sub>Perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>To Big</sub>
          </div>
        </div>
      </div>

    </div>

  );


};







export default ReviewProductBreakdown;