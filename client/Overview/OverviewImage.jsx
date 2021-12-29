import React from 'react';
import Previews from './OverviewPreviews.jsx';
import SlideReel from './OverviewSlideReel.jsx';

class OverviewImage extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.moveSlideReel = this.moveSlideReel.bind(this);
  }

  moveSlideReel(val) {
    const slideReel = document.querySelector('.po-slide-reel');
    this.counter = val;
    const move = (this.counter * -100) + '%';
    slideReel.style.transform = 'translateX(' + move + ')';
  }

  render() {
    return (
      <div className="po-image">
        <div onClick={() => { this.moveSlideReel(this.counter - 1); }} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
        <div onClick={() => { this.moveSlideReel(this.counter + 1); }} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
        <Previews extra={this.props.extra} moveSlideReel={this.moveSlideReel} />
        <SlideReel extra={this.props.extra} />
      </div>
    );
  }
}

export default OverviewImage;
