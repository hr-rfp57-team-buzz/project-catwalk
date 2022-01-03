import React, { useState, useEffect } from 'react';
import Previews from './OverviewPreviews.jsx';
import SlideReel from './OverviewSlideReel.jsx';

const OverviewGallery = (props) => {

  const moveSlideReel = (val) => {

    if (!props.product.photos) {
      return;
    }

    const lastIndex = props.product.photos.length + 1;
    if (props.expandedCounter.current === 0 || props.expandedCounter.current === lastIndex) {
      return;
    }

    const slideReel = document.querySelector('.po-slide-reel');
    props.expandedCounter.current = val;

    let topCounter = props.expandedCounter.current;
    if (topCounter === lastIndex) {
      topCounter = 1;
    } else if (topCounter === 0) {
      topCounter = lastIndex - 1;
    }
    const underline = document.querySelector('.po-previews-underline');
    const top = (topCounter * 70) + ((topCounter - 1) * 25) + 4;
    underline.style.top = top + 'px';

    let move = (props.expandedCounter.current * -100) + '%';
    slideReel.style.transition = 'all 0.4s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    slideReel.addEventListener('transitionend', () => {
      if (props.expandedCounter.current === 0) {
        props.expandedCounter.current = lastIndex - 1;
      } else if (props.expandedCounter.current === lastIndex) {
        props.expandedCounter.current = 1;
      }

      move = (props.expandedCounter.current * -100) + '%';
      slideReel.style.transition = 'none';
      slideReel.style.transform = 'translateX(' + move + ')';
    });
  };

  useEffect(() => {

    const lastIndex = props.product.photos.length + 1;
    const slideReel = document.querySelector('.po-slide-reel');

    let topCounter = props.expandedCounter.current;
    if (topCounter === lastIndex) {
      topCounter = 1;
    } else if (topCounter === 0) {
      topCounter = lastIndex - 1;
    }
    const underline = document.querySelector('.po-previews-underline');
    const top = (topCounter * 70) + ((topCounter - 1) * 25) + 4;
    underline.style.top = top + 'px';

    let move = (props.expandedCounter.current * -100) + '%';
    slideReel.style.transition = 'none';
    slideReel.style.transform = 'translateX(' + move + ')';
  });

  return (
    <div className="po-gallery" onClick={(e) => { props.updateExpandedView(e); }}>
      <div onClick={() => { moveSlideReel(props.expandedCounter.current - 1); }} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
      <div onClick={() => { moveSlideReel(props.expandedCounter.current + 1); }} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
      <Previews product={props.product} moveSlideReel={moveSlideReel} />
      <SlideReel product={props.product} />
    </div>
  );
};

export default OverviewGallery;