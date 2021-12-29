import React from 'react';
import Previews from './OverviewPreviews.jsx';
import SlideReel from './OverviewSlideReel.jsx';

class OverviewGallery extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 1;
    this.moveSlideReel = this.moveSlideReel.bind(this);
  }

  moveSlideReel(val) {
    if (!this.props.extra.photos) {
      return;
    }

    const lastIndex = this.props.extra.photos.length + 1;
    if (this.counter === 0 || this.counter === lastIndex) {
      return;
    }

    const slideReel = document.querySelector('.po-slide-reel');
    this.counter = val;
    let move = (this.counter * -100) + '%';
    slideReel.style.transition = 'all 0.4s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    slideReel.addEventListener('transitionend', () => {
      if (this.counter === 0) {
        this.counter = lastIndex - 1;
      } else if (this.counter === lastIndex) {
        this.counter = 1;
      }

      move = (this.counter * -100) + '%';
      slideReel.style.transition = 'none';
      slideReel.style.transform = 'translateX(' + move + ')';
    });
  }

  componentDidUpdate() {
    this.moveSlideReel(1);
  }

  render() {
    console.log('rendering!!!');

    return (
      <div className="po-gallery">
        <div onClick={() => { this.moveSlideReel(this.counter - 1); }} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
        <div onClick={() => { this.moveSlideReel(this.counter + 1); }} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
        <Previews extra={this.props.extra} moveSlideReel={this.moveSlideReel} />
        <SlideReel extra={this.props.extra} />
      </div>
    );
  }
}

export default OverviewGallery;
