import React from 'react';

const SlideReel = (props) => {
  return (
    <div className="po-slide-reel">
      <Slide key="last" photo={props.product.photos.length > 0 ? props.product.photos[props.product.photos.length - 1] : {url: ''}} />
      {
        props.product.photos.map((photo, index) => {
          return <Slide key={index} photo={photo} />;
        })
      }
      <Slide key="first" photo={props.product.photos.length > 0 ? props.product.photos[0] : {url: ''}} />
    </div>
  );
};

const Slide = (props) => {
  return (
    <img className="po-slide" src={props.photo.url} />
  );
};

export default SlideReel;