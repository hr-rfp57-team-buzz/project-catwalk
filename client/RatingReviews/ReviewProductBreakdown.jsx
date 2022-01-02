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






// import React, {useState, useEffect, useRef} from 'react';


// let ReviewProductBreakdown = ({scrape, reviewMeta}) => {

//   //HOOK line and sinker

//   // let [charArr, setCharArr] = useState([]);
//   // let [sizeChar, setSize1] = useState(<></>);
//   // let [widthChar, setWidth1] = useState(<></>);
//   // let [comfortChar, setComfort1] = useState(<></>);
//   // let [qualityChar, setQuality1] = useState(<></>);
//   // let [lengthChar, setLength1] = useState(<></>);
//   // let [fitChar, setFit1] = useState(<></>);

//   //DECLARATION of indep.

//   let qSlide = useRef();

//   let SCV = <></>;
//   let WCV = <></>;
//   let CCV = <></>;
//   let QCV = <></>;
//   let LCV = <></>;
//   let FCV = <></>;

//   let sizeCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Size
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="SizeSlider" className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>To Small</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>To Big</sub>
//       </div>
//     </div>
//   </div></>;

//   let widthCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Width
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="WidthSlider" className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>To Small</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>To Big</sub>
//       </div>
//     </div>
//   </div></>;

//   let comfortCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Comfort
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="ComfortSlider" className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>Poor</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>Great</sub>
//       </div>
//     </div>
//   </div></>;

//   let qualityCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Quality
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="QualitySlider" ref={qSlide} className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>Poor</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>Great</sub>
//       </div>
//     </div>
//   </div></>;

//   let lengthCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Length
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="LengthSlider" className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>To Short</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>To Long</sub>
//       </div>
//     </div>
//   </div></>;

//   let fitCharView = <><div className="reviewBarStats">
//     <div className="reviewBarStarNumber">
//       Fit
//     </div>
//     <div className="reviewProductBreakdown">
//       <div id="FitSlider" className='reviewTextRight'>
//         <span>▼</span>
//       </div>
//     </div>
//   </div>
//   <div className="reviewBarStats">
//     <div className="reviewBarStarNumber"></div>
//     <div className="gridContainer3Col">
//       <div className="gridItemLeft">
//         <sub>To Small</sub>
//       </div>
//       <div className="gridItemCenter">
//         <sub>Perfect</sub>
//       </div>
//       <div className="gridItemRight">
//         <sub>To Big</sub>
//       </div>
//     </div>
//   </div></>;

//   //conjunction junction whats your FUNCTION

//   let calculatePercent = (rating) => {
//     let hardRate = Math.round(rating * 10) / 10;
//     let percentage = Math.round((hardRate / 5) * 100);
//     return percentage;
//   };

//   let charArr = [];

//   let generateChars = () => {
//     if (!scrape) {
//       return;
//     } else {
//       let generatedCharArr = [];
//       for (var key in reviewMeta.characteristics) {
//         if (key === 'Size') {
//           // setSize1(sizeCharView);
//         }
//         if (key === 'Width') {
//           // setWidth1(widthCharView);
//         }
//         if (key === 'Comfort') {
//           // setComfort1(comfortCharView);
//           CCV = comfortCharView;
//           let comfortSlider = document.getElementById('ComfortSlider');
//           console.log(comfortSlider);
//         }
//         if (key === 'Quality') {
//           // setQuality1(qualityCharView);
//           // console.log(qualityChar);
//           QCV = qualityCharView;
//           let comfortSlider = document.getElementById('ComfortSlider');
//           console.log(comfortSlider);
//         }
//         if (key === 'Length') {
//           // setLength1(lengthCharView);
//         }
//         if (key === 'Fit') {
//           // setFit1(fitCharView);
//           // console.log(fitChar);
//         }
//         generatedCharArr.push(key);
//       }
//       charArr = generatedCharArr;
//       // console.log(charArr);

//       // console.log(qualityChar);
//     }
//   };

//   let resetCharViews = () => {
//     // setSize1(<></>);
//     // setWidth1(<></>);
//     // setComfort1(<></>);
//     // setQuality1(<></>);
//     // setLength1(<></>);
//     // setFit1(<></>);
//     sizeCharView = <></>;
//     widthCharView = <></>;
//     comfortCharView = <></>;

//   };

//   // let resetSliders = (arr) => {
//   //   arr.forEach(char => {
//   //     let targetSlider = document.getElementById(`${char}Slider`);
//   //     targetSlider.hidden = true;
//   //   });
//   // };

//   let setProductBreakdown = () => {
//     if (!scrape) {
//       return;
//     } else {
//       // reset all sliders and charViews
//       // generate characteristic arrays
//       resetCharViews();
//       generateChars();
//       // resetSliders(charArr);
//       // get data for sliders
//       // for (var key in reviewMeta.characteristics) {
//       //   let percentage = calculatePercent(reviewMeta.characteristics[key].value);
//       //   let targetSlider = document.getElementById(`${key}Slider`);
//       //   targetSlider.style.width = `${percentage}%`;
//       //   targetSlider.hidden = false;
//       // }
//     }
//   };

//   useEffect(() => {
//     setProductBreakdown();
//   }, [scrape]);


//   return (

//     <>

//       <>{SCV}</>
//       <>{WCV}</>
//       <>{CCV}</>
//       <>{QCV}</>
//       <>{LCV}</>
//       <>{FCV}</>

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Size
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="SizeSlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>To Small</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>Perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>To Big</sub>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Width
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="WidthSlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>To Small</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>Perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>To Big</sub>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Comfort
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="ComfortSlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>poor</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>great</sub>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Quality
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="QualitySlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>poor</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>great</sub>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Length
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="LengthSlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>To Short</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>Perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>To Long</sub>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="reviewBarStats">
//         <div className="reviewBarStarNumber">
//             Fit
//         </div>
//         <div className="reviewProductBreakdown">
//           <div id="FitSlider" className='reviewTextRight'>
//             <span>▼</span>
//           </div>
//         </div>
//       </div>
//       <div className="reviewBarStats">
//         <div className="reviewBarStarNumber"></div>
//         <div className="gridContainer3Col">
//           <div className="gridItemLeft">
//             <sub>To Small</sub>
//           </div>
//           <div className="gridItemCenter">
//             <sub>Perfect</sub>
//           </div>
//           <div className="gridItemRight">
//             <sub>To Big</sub>
//           </div>
//         </div>
//       </div> */}

//     </>

//   );


// };







// export default ReviewProductBreakdown;