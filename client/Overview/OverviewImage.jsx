import React from 'react';

let counter = 0;
const prevSlide = () => {
  const slideReel = document.querySelector('.po-slide-reel');
  counter--;
  const move = (counter * -100) + '%';
  slideReel.style.transform = 'translateX(' + move + ')';
};

const nextSlide = () => {
  const slideReel = document.querySelector('.po-slide-reel');
  counter++;
  const move = (counter * -100) + '%';
  slideReel.style.transform = 'translateX(' + move + ')';
};

class OverviewImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('extra', this.props.extra);
    if (this.props.extra.photos) {
      console.log(this.props.extra.photos[0].url);
    }
    return (
      <div className="po-image">
        <div onClick={prevSlide} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
        <div onClick={nextSlide} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
        <div className="po-mini-images">
          <div className="po-mini-indv"></div>
          <div className="po-mini-indv"></div>
          <div className="po-mini-indv"></div>
          <div className="po-mini-indv"></div>
          <div className="po-mini-indv"></div>
        </div>
        <SlideReel extra={this.props.extra} />
      </div>
    );
  }
}

class SlideReel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photos = [];
    if (this.props.extra.photos) {
      photos = this.props.extra.photos;
    }
    return (
      <div className="po-slide-reel">
        {
          photos.map((photo) => {
            return <Slide photo={photo} />;
          })
        }
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={this.props.photo.url} />
    );
  }
}

export default OverviewImage;
