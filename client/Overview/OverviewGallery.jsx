import React from 'react';
import Previews from './OverviewPreviews.jsx';
import SlideReel from './OverviewSlideReel.jsx';

const OverviewGallery = (props) => {

  console.log('hello', props);
  let counter = 1;

  const moveSlideReel = (val) => {

    if (!props.product.photos) {
      return;
    }

    const lastIndex = props.product.photos.length + 1;
    if (counter === 0 || counter === lastIndex) {
      return;
    }

    const slideReel = document.querySelector('.po-slide-reel');
    counter = val;
    let topCounter = counter;
    if (topCounter === lastIndex) {
      topCounter = 1;
    } else if (topCounter === 0) {
      topCounter = lastIndex - 1;
    }
    const underline = document.querySelector('.po-previews-underline');
    const top = (topCounter * 70) + ((topCounter - 1) * 25) + 4;
    underline.style.top = top + 'px';

    let move = (counter * -100) + '%';
    slideReel.style.transition = 'all 0.4s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    slideReel.addEventListener('transitionend', () => {
      if (counter === 0) {
        counter = lastIndex - 1;
      } else if (counter === lastIndex) {
        counter = 1;
      }

      move = (counter * -100) + '%';
      slideReel.style.transition = 'none';
      slideReel.style.transform = 'translateX(' + move + ')';
    });
  };

  return (
    <div className="po-gallery">
      <div onClick={() => { moveSlideReel(counter - 1); }} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
      <div onClick={() => { moveSlideReel(counter + 1); }} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
      <Previews product={props.product} moveSlideReel={moveSlideReel} />
      <SlideReel product={props.product} />
    </div>
  );
};


// class OverviewGallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.counter = 1;
//     this.moveSlideReel = this.moveSlideReel.bind(this);
//   }

  // moveSlideReel(val) {
  //   if (!this.props.extra.photos) {
  //     return;
  //   }

  //   const lastIndex = this.props.extra.photos.length + 1;
  //   if (this.counter === 0 || this.counter === lastIndex) {
  //     return;
  //   }

  //   const slideReel = document.querySelector('.po-slide-reel');
  //   this.counter = val;

  //   let topCounter = this.counter;
  //   if (topCounter === lastIndex) {
  //     topCounter = 1;
  //   } else if (topCounter === 0) {
  //     topCounter = lastIndex - 1;
  //   }
  //   const underline = document.querySelector('.po-previews-underline');
  //   const top = (topCounter * 70) + ((topCounter - 1) * 25) + 4;
  //   underline.style.top = top + 'px';


  //   let move = (this.counter * -100) + '%';
  //   slideReel.style.transition = 'all 0.4s ease-in-out';
  //   slideReel.style.transform = 'translateX(' + move + ')';

  //   slideReel.addEventListener('transitionend', () => {
  //     if (this.counter === 0) {
  //       this.counter = lastIndex - 1;
  //     } else if (this.counter === lastIndex) {
  //       this.counter = 1;
  //     }

  //     move = (this.counter * -100) + '%';
  //     slideReel.style.transition = 'none';
  //     slideReel.style.transform = 'translateX(' + move + ')';
  //   });
  // }

//   componentDidUpdate() {
//     this.moveSlideReel(1);
//   }

//   render() {
//     return (
//       <div className="po-gallery">
//         <div onClick={() => { this.moveSlideReel(this.counter - 1); }} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
//         <div onClick={() => { this.moveSlideReel(this.counter + 1); }} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
//         {/* <Previews extra={this.props.extra} moveSlideReel={this.moveSlideReel} /> */}
//         <SlideReel extra={this.props.product} />
//       </div>
//     );
//   }
// }

export default OverviewGallery;
