import React from 'react';

let counter = 0;
const prevSlide = () => {
  const slideReel = document.querySelector('.slide-reel');
  counter--;
  const move = (counter * -100) + '%';
  slideReel.style.transform = 'translateX(' + move + ')';
};

const nextSlide = () => {
  const slideReel = document.querySelector('.slide-reel');
  counter++;
  const move = (counter * -100) + '%';
  slideReel.style.transform = 'translateX(' + move + ')';
};

class OverviewImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <div className="slide-reel">
          <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
          <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
          <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
        </div>
      </div>
    );
  }
}

export default OverviewImage;
