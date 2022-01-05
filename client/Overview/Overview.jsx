import React, { useState, useContext, useEffect, useRef } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import OverviewExpanded from './OverviewExpanded.jsx';
import OverviewAnnouncement from './OverviewAnnouncement.jsx';
import OverviewGallery from './OverviewGallery.jsx';
import OverviewDetails from './OverviewDetails.jsx';
import OverviewDescription from './OverviewDescription.jsx';

const Overview = (props) => {
  const [product, updateProduct] = useContext(OverviewContext);
  const [expandedView, setExpandedView] = useState(false);
  const counter = useRef(1);

  const updateExpandedView = (e) => {
    if (e.target.classList.value !== 'po-slide' && e.target.classList.value !== 'po-expanded') {
      return;
    }
    document.body.classList.toggle('active');
    setExpandedView(!expandedView);
  };

  return (
    <div id="product-overview">
      {expandedView ? <OverviewExpanded product={product} counter={counter} updateExpandedView={updateExpandedView} /> : ''}
      {/* {expandedView ? <OverviewTest product={product} counter={counter} updateExpandedView={updateExpandedView} /> : ''} */}
      <OverviewAnnouncement />
      <div className="po-flex">
        <OverviewGallery product={product} expandedCounter={counter} updateExpandedView={updateExpandedView} />
        <OverviewDetails product={product} updateProduct={updateProduct} />
      </div>
      <OverviewDescription product={product} />
    </div>
  );
};

const OverviewTest = (props) => {

  const handleMouseMove = (e) => {
    const container = document.querySelectorAll('.test-slide-image')[0];
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let mouseX = e.nativeEvent.offsetX;
    let mouseY = e.nativeEvent.offsetY;
    console.log(e);
    let bgPosX = (mouseX / width) * 100;
    let bgPosY = (mouseY / height) * 100;
    container.style.backgroundSize = '150%';
    container.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    console.log(container);
  };

  const handleMouseOut = (e) => {
    const container = document.querySelectorAll('.test-slide-image')[0];
    container.style.backgroundSize = '100%';
  };

  const moveSlideReel = (val) => {

    const lastIndex = props.product.photos.length + 1;
    if (props.counter.current === 0 || props.counter.current === lastIndex) {
      return;
    }

    const slideReel = document.querySelector('.test-slide-reel');
    props.counter.current = val;

    let move = (props.counter.current * -100) + '%';
    slideReel.style.transition = 'all 0.4s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    // let bubbleMove = (props.counter.current - 1) * 50;
    // if (props.counter.current === lastIndex) {
    //   bubbleMove = 0;
    // } else if (props.counter.current === 0) {
    //   bubbleMove = (lastIndex - 2) * 50;
    // }
    // const bubble = document.querySelector('.po-icon-bubble-selected');
    // bubble.style.transform = 'translateX(' + bubbleMove + 'px)';

    slideReel.addEventListener('transitionend', () => {
      if (props.counter.current === 0) {
        props.counter.current = lastIndex - 1;
      } else if (props.counter.current === lastIndex) {
        props.counter.current = 1;
      }

      move = (props.counter.current * -100) + '%';
      slideReel.style.transition = 'none';
      slideReel.style.transform = 'translateX(' + move + ')';

      // bubbleMove = (props.counter.current - 1) * 50;
      // bubble.style.transform = 'translateX(' + bubbleMove + 'px)';
    });

  };

  return (
    <div className="test-modal">
      <div className="test-inner-modal">
        <div onClick={() => { moveSlideReel(props.counter.current - 1); }} className="po-expanded-left-arrow"><i className="fas fa-arrow-left"></i></div>
        <div onClick={() => { moveSlideReel(props.counter.current + 1); }} className="po-expanded-right-arrow"><i className="fas fa-arrow-right"></i></div>
        <div className="test-slide-reel" onMouseMove={(e) => { handleMouseMove(e); }} onMouseLeave={(e) => { handleMouseOut(e); }}>
          <div className="test-slide-image"></div>
          <div className="test-slide-image"></div>
          <div className="test-slide-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;