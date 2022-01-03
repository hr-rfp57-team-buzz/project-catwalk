import React, { useState, useEffect} from 'react';
import AddAReviewStars from './AddAReviewStars.jsx';
import axios from 'axios';
import AddAReviewCharacteristics from './AddAReviewCharacteristics.jsx';


let AddAReview = ({window, prodId, reviewMeta, scrape}) => {

  //captain HOOKs
  let [SizeRatingSelection, setSize] = useState(1);
  let [WidthRatingSelection, setWidth] = useState(1);
  let [ComfortRatingSelection, setComfort] = useState(1);
  let [QualityRatingSelection, setQuality] = useState(1);
  let [LengthRatingSelection, setLength] = useState(1);
  let [FitRatingSelection, setFit] = useState(1);
  let [doYouRecommendSelection, setRecommend] = useState(undefined);

  let [productRating, setProductRating] = useState(0);
  let [minCharCount, setMinCharCount] = useState(50);

  let [charCount, setCharCount] = useState( `Minimum required characters left: ${minCharCount}` );

  let reviewSummary = document.getElementById('reviewSummary');
  let reviewBody = document.getElementById('reviewBody');
  let reviewNickname = document.getElementById('reviewNickname');
  let reviewEmail = document.getElementById('reviewEmail');
  let charsToSend = {};

  let characteristicsArray = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];


  let doYouRecommend = (e) => {
    if (e.target.value === 'false') {
      setRecommend(false);
    }
    if (e.target.value === 'true') {
      setRecommend(true);
    }
  };

  let sizeRating = (e) => {
    let size = e.target.value;
    setSize(size);
  };

  let widthRating = (e) => {
    let width = e.target.value;
    setWidth(width);
  };

  let comfortRating = (e) => {
    let comfort = e.target.value;
    setComfort(comfort);
  };

  let qualityRating = (e) => {
    let quality = e.target.value;
    setQuality(quality);
  };

  let lengthRating = (e) => {
    let length = e.target.value;
    setLength(length);
  };

  let fitRating = (e) => {
    let fit = e.target.value;
    setFit(fit);
  };


  let closeAddReviewWindow = () => {
    window.style.visibility = 'hidden';
  };

  let minimumCharacterCount = (e) => {
    e.preventDefault();
    let charsLeft = 50 - e.target.value.length;
    if (charsLeft < 1) {
      setCharCount('Minimum Count Reached');
      return;
    } else {
      setMinCharCount(charsLeft);
      setCharCount(`Minimum required characters left: ${minCharCount}`);
      return;
    }
  };

  let generateCharacteristicsObject = () => {
    charsToSend = {};
    for (var key in reviewMeta.characteristics) {
      charsToSend[key] = reviewMeta.characteristics[key];
    }
    characteristicsArray.forEach(char => {
      if (charsToSend[char] !== undefined) {
        if (char === 'Size') {
          charsToSend[char].value = Number(SizeRatingSelection);
        }
        if (char === 'Width') {
          charsToSend[char].value = Number(WidthRatingSelection);
        }
        if (char === 'Comfort') {
          charsToSend[char].value = Number(ComfortRatingSelection);
        }
        if (char === 'Quality') {
          charsToSend[char].value = Number(QualityRatingSelection);
        }
        if (char === 'Length') {
          charsToSend[char].value = Number(LengthRatingSelection);
        }
        if (char === 'Fit') {
          charsToSend[char].value = Number(FitRatingSelection);
        }
      }
    });
    // console.log(charsToSend);

  };

  let sendNewReview = () => {
    generateCharacteristicsObject();
    console.log('prodcutId: ', prodId);
    console.log('size: ', SizeRatingSelection);
    console.log('width: ', WidthRatingSelection);
    console.log('comfort: ', ComfortRatingSelection);
    console.log('quality: ', QualityRatingSelection);
    console.log('length: ', LengthRatingSelection);
    console.log('fit: ', FitRatingSelection);
    console.log('overallRating: ', productRating);
    console.log('recommended?: ', doYouRecommendSelection);
    console.log('body: ', reviewBody.value);
    console.log('summary: ', reviewSummary.value);
    console.log('nickname: ', reviewNickname.value);
    console.log('email: ', reviewEmail.value);
    // console.log(charsToSend);
    if (productRating === 0) {
      alert('Please select an Overall Rating for this product');
      return;
    }
    if (doYouRecommendSelection === undefined) {
      alert('Please select an answer for "Do you recommend this product?"');
      return;
    }
    if (reviewBody.value.length < 49) {
      alert('Please reach minimum character count for review body text.');
      return;
    }
    if (reviewNickname.value === '' || reviewNickname.value === ' ' || reviewNickname.value === undefined) {
      alert('Please input a nickname.');
      return;
    }
    if (reviewEmail.value === '' || reviewEmail.value === ' ' || reviewEmail.value === undefined) {
      alert('Please input a email address.');
      return;
    }
    axios.post('/reviews', {
      'product_id': prodId,
      'rating': productRating,
      'summary': reviewSummary.value,
      'body': reviewBody.value,
      'recommend': doYouRecommendSelection,
      'name': reviewNickname.value,
      'email': reviewEmail.value,
      // 'photos': ['http://placecorgi.com/250'],
      'characteristics': {
        '133334': Number(SizeRatingSelection),
        '133333': Number(WidthRatingSelection),
        '133335': Number(ComfortRatingSelection),
        '133336': Number(QualityRatingSelection),
        '133337': Number(LengthRatingSelection),
        '133338': Number(FitRatingSelection)
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };






  return (

    <div id="reviewAddWindow" className="reviewModel">
      <div className="reviewAdd">
        <div className="gridContainer2Col">
          <div className="gridItemLeft">
            <h2>Write Your Review</h2>
            <h4>About the [Product Name Here]</h4>
          </div>
          <div className="gridItemRight">
            <h1 className="reviewPointer" onClick={closeAddReviewWindow}>X</h1>
          </div>
        </div>
        {/* Start Review Form */}
        <div id="reviewAddForm">
          <p>Overall Rating *</p>
          <AddAReviewStars setProductRating={setProductRating} />
          <p>Do you recommend this product? *</p>
          <div className="reviewStarsContainer">
            <div onChange={doYouRecommend} className="reviewInlineBlock">
              <input type="radio" id="recommendYes" name="reviewRecommend" value={true}></input>
              <label htmlFor="recommendYes">Yes</label>
            </div>
            <div onChange={doYouRecommend} className="reviewInlineBlock">
              <input type="radio" id="recommendNo" name="reviewRecommend" value={false}></input>
              <label htmlFor="recommendNo">No</label>
            </div>
          </div>
          <p>Characteristics *</p>
          <AddAReviewCharacteristics sizeRating={sizeRating} widthRating={widthRating} comfortRating={comfortRating} qualityRating={qualityRating} lengthRating={lengthRating} fitRating={fitRating} reviewMeta={reviewMeta} scrape={scrape}/>
          <p>Review Summary</p>
          <textarea id="reviewSummary" name="reviewSummary" rows="2" cols="50" maxLength="60" placeholder="Example: Best purchase ever!"></textarea>
          <p>Review body *</p>
          <textarea id="reviewBody" name="reviewBody" rows="5" cols="100" maxLength="1000" placeholder="Why did you like the product or not?" onInput={minimumCharacterCount}></textarea>
          <div><p id="reviewBodyMin">{charCount}</p></div>
          <p>Upload Photo(s)</p>
          <input type="file" multiple/>
          <p>What is your nickname *</p>
          <textarea id="reviewNickname" name="reviewNickname" col="50" rows="1" maxLength="21" placeholder="Example: jackson11!"></textarea>
          <p>For privacy reasons, do not use your full nae or email address</p>
          <br/>
          <p>Your Email *</p>
          <textarea id="reviewEmail" name="reviewEmail" cols="50" rows="1" maxLength="50" placeholder="Example: jackson11@email.com"></textarea>
          <p>For authentication reasons, you will not be emailed</p>
          <button onClick={sendNewReview}>Submit</button>
        </div>
        {/* End Review Form */}
      </div>
    </div>

  );



};




export default AddAReview;