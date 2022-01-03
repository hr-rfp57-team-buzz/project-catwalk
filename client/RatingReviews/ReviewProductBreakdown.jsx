import React, {useState, useEffect} from 'react';


let ReviewProductBreakdown = ({scrape, reviewMeta}) => {

  let calculatePercent = (rating) => {
    let hardRate = Math.round(rating * 10) / 10;
    let percentage = Math.round((hardRate / 5) * 100);
    return percentage;
  };

  let charArr = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];

  let resetSliders = (arr) => {
    arr.forEach(char => {
      let targetSlider = document.getElementById(`${char}Slider`);
      targetSlider.hidden = true;
    });
  };

  let setProductBreakdown = () => {
    if (!scrape) {
      return;
    } else {
      // reset all sliders
      resetSliders(charArr);
      // get data for sliders
      for (var key in reviewMeta.characteristics) {
        let percentage = calculatePercent(reviewMeta.characteristics[key].value);
        let targetSlider = document.getElementById(`${key}Slider`);
        targetSlider.style.width = `${percentage}%`;
        targetSlider.hidden = false;
      }
    }
  };

  useEffect(() => {
    setProductBreakdown();
  }, [scrape]);


  return (

    <div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Size
        </div>
        <div className="reviewProductBreakdown">
          <div id="SizeSlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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
          <div id="WidthSlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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
          <div id="ComfortSlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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
            <sub>perfect</sub>
          </div>
          <div className="gridItemRight">
            <sub>great</sub>
          </div>
        </div>
      </div>

      <div className="reviewBarStats">
        <div className="reviewBarStarNumber">
            Quality
        </div>
        <div className="reviewProductBreakdown">
          <div id="QualitySlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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
            <sub>perfect</sub>
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
          <div id="LengthSlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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
          <div id="FitSlider" className='reviewTextRight reviewCharacteristicProgress'>
            <span className="reviewSlider">▼</span>
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






