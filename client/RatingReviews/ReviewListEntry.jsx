import React, { useState } from 'react';

let ReviewListEntry = (props) => {

  let [reviewPhotos, setReviewPhotos] = useState([undefined]);

  let createPhotoArray = () => {
    if (props.review.photos !== undefined) {
      setReviewPhotos(props.review.photos);
    }
  };


  React.useEffect(() => {
    createPhotoArray();
  }, []);

  return (

    <div>
      <div className="gridContainer2Col">
        <div className="gridItemLeft">
          <i className="far fa-star" style={{background: 'yellow'}}></i>
          <i className="far fa-star" style={{background: 'yellow'}}></i>
          <i className="far fa-star" style={{background: 'linear-gradient(to right, yellow 50%, white 50%)'}}></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <div className="gridItemRight">
          <sub>{props.review.reviewer_name}, {props.review.date}</sub>
        </div>
      </div>
      <h4>{props.review.summary}</h4>
      <p>{props.review.body}</p>
      <div hidden={true} class="responseFromSeller">
        <h4 className="pad15">Response from seller:</h4>
        <p className="pad15">re ultrices diam tincidunt at. Maecenas sit amet iaculis odio, a viverra felis. Aliquam sit amet</p>
      </div>
      <div className="reviewPhotosContainer">
        {reviewPhotos.map((photo, index) => {
          if (photo === undefined) {
            return <span></span>;
          } else {
            return <img className="reviewPhotos" src={photo.url} alt={photo.id} key={index} />;
          }
        })}
      </div>
      <br/>
      <p>Was this review helpful?</p>
      <sub><a href="#">YES</a>  <a href="#">NO</a></sub>
      <br/><br/>
      <hr/>
      <br/><br/>
    </div>

  );

};



export default ReviewListEntry;