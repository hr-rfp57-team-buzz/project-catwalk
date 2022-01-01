import React, { useState, useEffect} from 'react';
import AddAReviewStars from './AddAReviewStars.jsx';
import axios from 'axios';


let AddAReview = ({window, prodId}) => {

  //captain HOOKs
  let [productRating, setProductRating] = useState(0);
  let [minCharCount, setMinCharCount] = useState(50);
  let [charCount, setCharCount] = useState(
    <p id="reviewBodyMin">Minimum required characters left: {minCharCount}</p>
  );

  let sizeRatingSelection = 0;
  let widthRatingSelection = 0;
  let comfortRatingSelection = 0;
  let qualityRatingSelection = 0;
  let lengthRatingSelection = 0;
  let fitRatingSelection = 0;
  let doYouRecommendSelection = true;
  let reviewSummary = document.getElementById('reviewSummary');
  let reviewBody = document.getElementById('reviewBody');
  let reviewNickname = document.getElementById('reviewNickname');
  let reviewEmail = document.getElementById('reviewEmail');


  let doYouRecommend = (e) => {
    if (e.target.value === 'false') {
      doYouRecommendSelection = false;
    }
    if (e.target.value === 'true') {
      doYouRecommendSelection = true;
    }
  };

  let sizeRating = (e) => {
    sizeRatingSelection = e.target.value;
    // console.log('size: ', sizeRatingSelection);
  };

  let widthRating = (e) => {
    widthRatingSelection = e.target.value;
    // console.log('width: ', widthRatingSelection);
  };

  let comfortRating = (e) => {
    comfortRatingSelection = e.target.value;
    // console.log('comfort: ', comfortRatingSelection);
  };

  let qualityRating = (e) => {
    qualityRatingSelection = e.target.value;
    // console.log('quality: ', qualityRatingSelection);
  };

  let lengthRating = (e) => {
    lengthRatingSelection = e.target.value;
    // console.log('length: ', lengthRatingSelection);
  };

  let fitRating = (e) => {
    fitRatingSelection = e.target.value;
    // console.log('fit: ', fitRatingSelection);
  };


  let closeAddReviewWindow = () => {
    window.style.visibility = 'hidden';
  };

  let minimumCharacterCount = (e) => {
    // SOMETHING IN THIS FUNCTION IS BREAKING AND RESETTING THE STATE OF THE HOOKS ABOVE
    // e.preventDefault();
    // let charsLeft = 50 - e.target.value.length;
    // if (charsLeft < 1) {
    //   setCharCount(<p id="reviewBodyMin">Minimum reached</p>);
    //   return;
    // } else {
    //   setMinCharCount(charsLeft);
    //   setCharCount(
    //     <p id="reviewBodyMin">Minimum required characters left: {minCharCount}</p>
    //   );
    // }
  };

  let sendNewReview = () => {
    // console.log('prodcutId: ', prodId);
    // console.log('size: ', typeof(sizeRatingSelection));
    // console.log('width: ', widthRatingSelection);
    // console.log('comfort: ', comfortRatingSelection);
    // console.log('quality: ', qualityRatingSelection);
    // console.log('length: ', lengthRatingSelection);
    // console.log('fit: ', fitRatingSelection);
    // console.log('overallRating: ', productRating);
    // console.log('recommended?: ', typeof(doYouRecommendSelection));
    // console.log('body: ', reviewBody.value);
    // console.log('summary: ', reviewSummary.value);
    // console.log('nickname: ', reviewNickname.value);
    // console.log('email: ', reviewEmail.value);
    axios.post('/reviews', {
      'product_id': prodId,
      'rating': productRating,
      'summary': reviewSummary.value,
      'body': reviewBody.value,
      'recommend': doYouRecommendSelection,
      'name': reviewNickname.value,
      'email': reviewEmail.value,
      'photos': ['http://placecorgi.com/250'],
      'characteristics': {
        '133334': Number(sizeRatingSelection),
        '133333': Number(widthRatingSelection),
        '133335': Number(comfortRatingSelection),
        '133336': Number(qualityRatingSelection),
        '133337': Number(lengthRatingSelection),
        '133338': Number(fitRatingSelection)
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   // console.log(productRating);
  // }, [productRating]);






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
          <table className="reviewAddTable">
            <tbody>
              <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>

              <tr onChange={sizeRating}>
                <td><b>Size</b></td>
                <td>
                  <input type="radio" id="sizeAdd1" name="sizeReview" value="1"></input>
                  <p>A size too small</p>
                </td>
                <td>
                  <input type="radio" id="sizeAdd2" name="sizeReview" value="2"></input>
                  <p>1/2 size too small</p>
                </td>
                <td>
                  <input type="radio" id="sizeAdd3" name="sizeReview" value="3"></input>
                  <p>Perfect</p>
                </td>
                <td>
                  <input type="radio" id="sizeAdd4" name="sizeReview" value="4"></input>
                  <p>1/2 size too big</p>
                </td>
                <td>
                  <input type="radio" id="sizeAdd5" name="sizeReview" value="5"></input>
                  <p>A size too wide</p>
                </td>
              </tr>

              <tr onChange={widthRating}>
                <td><b>Width</b></td>
                <td>
                  <input type="radio" id="widthAdd1" name="widthReview" value="1"></input>
                  <p>Too narrow</p>
                </td>
                <td>
                  <input type="radio" id="widthAdd2" name="widthReview" value="2"></input>
                  <p>Slightly narrow</p>
                </td>
                <td>
                  <input type="radio" id="widthAdd3" name="widthReview" value="3"></input>
                  <p>Perfect</p>
                </td>
                <td>
                  <input type="radio" id="widthAdd4" name="widthReview" value="4"></input>
                  <p>Slightly wide</p>
                </td>
                <td>
                  <input type="radio" id="widthAdd5" name="widthReview" value="5"></input>
                  <p>Too wide</p>
                </td>
              </tr>

              <tr onChange={comfortRating}>
                <td><b>Comfort</b></td>
                <td>
                  <input type="radio" id="comfortAdd1" name="comfortReview" value="1"></input>
                  <p>Uncomfortable</p>
                </td>
                <td>
                  <input type="radio" id="comfortAdd2" name="comfortReview" value="2"></input>
                  <p>Slightly uncomfortable</p>
                </td>
                <td>
                  <input type="radio" id="comfortAdd3" name="comfortReview" value="3"></input>
                  <p>Ok</p>
                </td>
                <td>
                  <input type="radio" id="comfortAdd4" name="comfortReview" value="4"></input>
                  <p>Comfortable</p>
                </td>
                <td>
                  <input type="radio" id="comfortAdd5" name="comfortReview" value="5"></input>
                  <p>Perfect</p>
                </td>
              </tr>

              <tr onChange={qualityRating}>
                <td><b>Quality</b></td>
                <td>
                  <input type="radio" id="qualityAdd1" name="qualityReview" value="1"></input>
                  <p>Poor</p>
                </td>
                <td>
                  <input type="radio" id="qualityAdd2" name="qualityReview" value="2"></input>
                  <p>Below Average</p>
                </td>
                <td>
                  <input type="radio" id="qualityAdd3" name="qualityReview" value="3"></input>
                  <p>What I expected</p>
                </td>
                <td>
                  <input type="radio" id="qualityAdd4" name="qualityReview" value="4"></input>
                  <p>Pretty great</p>
                </td>
                <td>
                  <input type="radio" id="qualityAdd5" name="qualityReview" value="5"></input>
                  <p>Perfect</p>
                </td>
              </tr>

              <tr onChange={lengthRating}>
                <td><b>Length</b></td>
                <td>
                  <input type="radio" id="lengthAdd1" name="lengthReview" value="1"></input>
                  <p>Runs Short</p>
                </td>
                <td>
                  <input type="radio" id="lengthAdd2" name="lengthReview" value="2"></input>
                  <p>Runs slightly short</p>
                </td>
                <td>
                  <input type="radio" id="lengthAdd3" name="lengthReview" value="3"></input>
                  <p>Perfect</p>
                </td>
                <td>
                  <input type="radio" id="lengthAdd4" name="lengthReview" value="4"></input>
                  <p>Runs slightly long</p>
                </td>
                <td>
                  <input type="radio" id="lengthAdd5" name="lengthReview" value="5"></input>
                  <p>Runs long</p>
                </td>
              </tr>

              <tr onChange={fitRating}>
                <td><b>Fit</b></td>
                <td>
                  <input type="radio" id="fitAdd1" name="fitReview" value="1"></input>
                  <p>Runs tight</p>
                </td>
                <td>
                  <input type="radio" id="fitAdd2" name="fitReview" value="2"></input>
                  <p>Runs slightly tight</p>
                </td>
                <td>
                  <input type="radio" id="fitAdd3" name="fitReview" value="3"></input>
                  <p>Perfect</p>
                </td>
                <td>
                  <input type="radio" id="fitAdd4" name="fitReview" value="4"></input>
                  <p>Runs slightly long</p>
                </td>
                <td>
                  <input type="radio" id="fitAdd5" name="fitReview" value="5"></input>
                  <p>Runs long</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Review Summary</p>
          <textarea id="reviewSummary" name="reviewSummary" rows="2" cols="50" maxLength="60" placeholder="Example: Best purchase ever!"></textarea>
          <p>Review body *</p>
          <textarea id="reviewBody" name="reviewBody" rows="5" cols="100" maxLength="1000" placeholder="Why did you like the product or not?" onInput={minimumCharacterCount}></textarea>
          <div>{charCount}</div>
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