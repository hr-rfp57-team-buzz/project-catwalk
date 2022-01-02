import React, { useState, useContext } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import OverviewAnnouncement from './OverviewAnnouncement.jsx';
import OverviewGallery from './OverviewGallery.jsx';
import OverviewDetails from './OverviewDetails.jsx';
import OverviewDescription from './OverviewDescription.jsx';
import axios from 'axios';

const Overview = (props) => {
  const [product, allStyles, updateAllStyles] = useContext(OverviewContext);
  const [expandedView, setExpandedView] = useState('po-expanded');

  const updateExpandedView = (e) => {
    if (e.target.classList.value !== 'po-expanded active' && e.target.classList.value !== 'po-slide') {
      return;
    }
    if (expandedView === 'po-expanded') {
      document.body.style.overflowY = 'hidden';
      setExpandedView('po-expanded active');
    } else {
      document.body.style.overflowY = 'scroll';
      setExpandedView('po-expanded');
    }
  };

  return (
    <div id="product-overview">
      <Expanded styling={expandedView} product={product} updateExpandedView={updateExpandedView} />
      <OverviewAnnouncement />
      <div className="po-flex">
        <OverviewGallery product={product} updateExpandedView={updateExpandedView} />
        <OverviewDetails product={product} allStyles={allStyles} updateAllStyles={updateAllStyles} />
      </div>
      <OverviewDescription product={product} />
    </div>
  );
};

const Expanded = (props) => {

  let counter = 1;

  const moveSlideReel = (val) => {

    // if (!props.product.photos) {
    //   return;
    // }

    // const lastIndex = props.product.photos.length + 1;
    // if (counter === 0 || counter === lastIndex) {
    //   return;
    // }

    const slideReel = document.querySelector('.po-expanded-slide-reel');
    counter = val;


    let move = (counter * -100) + '%';
    slideReel.style.transition = 'all 0.4s ease-in-out';
    slideReel.style.transform = 'translateX(' + move + ')';

    // slideReel.addEventListener('transitionend', () => {
    //   if (counter === 0) {
    //     counter = lastIndex - 1;
    //   } else if (counter === lastIndex) {
    //     counter = 1;
    //   }

    //   move = (counter * -100) + '%';
    //   slideReel.style.transition = 'none';
    //   slideReel.style.transform = 'translateX(' + move + ')';
    // });
  };

  return (
    <div className={props.styling} onClick={(e) => { props.updateExpandedView(e); }} >
      <div className="po-expanded-inner">
        <div onClick={() => { moveSlideReel(counter - 1); }} className="po-expanded-left-arrow"><i className="fas fa-arrow-left"></i></div>
        <div onClick={() => { moveSlideReel(counter + 1); }} className="po-expanded-right-arrow"><i className="fas fa-arrow-right"></i></div>
        <OverviewExpandedSlideReel product={props.product} />
        <div className="po-icon-bubbles">
          <div onClick={() => { moveSlideReel(1); }} className="po-icon-bubble"></div>
          <div onClick={() => { moveSlideReel(2); }} className="po-icon-bubble"></div>
          <div onClick={() => { moveSlideReel(3); }} className="po-icon-bubble"></div>
        </div>
      </div>
    </div>
  );
};

const OverviewExpandedSlideReel = (props) => {
  console.log('slide', props.product);
  return (
    <div className="po-expanded-slide-reel">
      {
        props.product.photos.map((photo, index) => {
          return <OverviewExpandedSlide key={index} photo={photo} />;
        })
      }
    </div>
  );
};

const OverviewExpandedSlide = (props) => {
  return (
    <div className="po-expanded-img-container">
      <img src={props.photo.url} />
    </div>
  );
};

export default Overview;