import React, { useState, useEffect, useRef } from 'react';
import OverviewExpandedSlideReel from './OverviewExpandedSlideReel.jsx';
import OverviewExpandedIconBubbles from './OverviewExpandedIconBubbles.jsx';

const OverviewExpanded = (props) => {

  const [zoom, setZoom] = useState(false);

  const moveSlideReel = (val) => {
    const lastIndex = props.product.photos.length + 1;
    if (props.counter.current === 0 || props.counter.current === lastIndex) {
      return;
    }

    const slideReel = document.querySelector('.po-expanded-slide-reel');
    props.counter.current = val;

    let move = (props.counter.current * -100) + '%';
    slideReel.style.transition = 'all 0.8s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    let bubbleMove = (props.counter.current - 1) * 50;
    if (props.counter.current === lastIndex) {
      bubbleMove = 0;
    } else if (props.counter.current === 0) {
      bubbleMove = (lastIndex - 2) * 50;
    }
    const bubble = document.querySelector('.po-icon-bubble-selected');
    bubble.style.transform = 'translateX(' + bubbleMove + 'px)';

    slideReel.addEventListener('transitionend', () => {
      if (props.counter.current === 0) {
        props.counter.current = lastIndex - 1;
      } else if (props.counter.current === lastIndex) {
        props.counter.current = 1;
      }

      move = (props.counter.current * -100) + '%';
      slideReel.style.transition = 'none';
      slideReel.style.transform = 'translateX(' + move + ')';

      bubbleMove = (props.counter.current - 1) * 50;
      bubble.style.transform = 'translateX(' + bubbleMove + 'px)';
    });
  };

  useEffect(() => {
    const slideReel = document.querySelector('.po-expanded-slide-reel');
    let move = (props.counter.current * -100) + '%';
    slideReel.style.transition = 'none';
    slideReel.style.transform = 'translateX(' + move + ')';
  }, []);

  const toggleZoom = (e) => {
    if (e.target.classList.value !== 'po-expanded-slide') {
      return;
    }
    const container = document.querySelectorAll('.po-expanded-slide')[props.counter.current];
    container.style.backgroundSize = '100%';
    container.style.backgroundPosition = 'center';
    setZoom(!zoom);
  };

  return (
    <div className="po-expanded" onClick={(e) => { props.updateExpandedView(e); }}>
      <div className="po-expanded-inner" onClick={(e) => { toggleZoom(e); }}>
        {zoom ? '' : <div onClick={() => { moveSlideReel(props.counter.current - 1); }} className="po-expanded-left-arrow"><i className="fas fa-arrow-left"></i></div>}
        {zoom ? '' : <div onClick={() => { moveSlideReel(props.counter.current + 1); }} className="po-expanded-right-arrow"><i className="fas fa-arrow-right"></i></div>}
        <OverviewExpandedSlideReel product={props.product} counter={props.counter} zoom={zoom} toggleZoom={toggleZoom} />
        {zoom ? '' : <OverviewExpandedIconBubbles product={props.product} counter={props.counter.current} moveSlideReel={moveSlideReel} />}
      </div>
    </div>
  );
};

export default OverviewExpanded;