import React, { useState, useEffect, useRef } from 'react';

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
        {zoom ? '' : <OverviewIconBubbles product={props.product} counter={props.counter.current} moveSlideReel={moveSlideReel} />}
      </div>
    </div>
  );
};

const OverviewExpandedSlideReel = (props) => {
  const handleMouseMove = (e) => {
    if (!props.zoom) {
      return;
    }
    const container = document.querySelectorAll('.po-expanded-slide')[props.counter.current];
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let mouseX = e.nativeEvent.offsetX;
    let mouseY = e.nativeEvent.offsetY;
    let bgPosX = (mouseX / width) * 100;
    let bgPosY = (mouseY / height) * 100;
    container.style.backgroundSize = '250%';
    container.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
  };

  const handleMouseLeave = (e) => {
    const container = document.querySelectorAll('.po-expanded-slide')[props.counter.current];
    container.style.backgroundSize = '100%';
    container.style.backgroundPosition = 'center';
  };

  return (
    <div className="po-expanded-slide-reel" onMouseMove={(e) => { handleMouseMove(e); }} onMouseLeave={(e) => { handleMouseLeave(e); }} onClick={props.toggleZoom}>
      <OverviewExpandedSlide key="last" photo={props.product.photos.length > 0 ? props.product.photos[props.product.photos.length - 1] : {url: ''}} />
      {props.product.photos.map((photo, index) => {
        return <OverviewExpandedSlide key={index} photo={photo} />;
      })}
      <OverviewExpandedSlide key="first" photo={props.product.photos.length > 0 ? props.product.photos[0] : {url: ''}} />
    </div>
  );
};

const OverviewExpandedSlide = (props) => {

  let styling = {
    'flexShrink': '0',
    'width': '100%',
    'paddingTop': 'calc(100% / (16/12))',
    'background': 'url(' + props.photo.url + ')',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '100%',
    'cursor': 'pointer'
  };

  return (
    <div className="po-expanded-slide" style={styling}></div>
  );
};

const OverviewIconBubbles = (props) => {
  return (
    <div className="po-icon-bubbles">
      <div className="po-icon-bubble-selected"></div>
      {
        props.product.photos.map((photo, index) => {
          return <OverviewIconBubble key={index} photo={photo} counter={props.counter} index={index + 1} moveSlideReel={props.moveSlideReel} />;
        })
      }
    </div>
  );
};

const OverviewIconBubble = (props) => {
  const bubble = useRef();

  const handleClick = () => {
    props.moveSlideReel(props.index);
  };

  return (
    <div onClick={() => { handleClick(); }} className="po-icon-bubble" ref={bubble}></div>
  );
};

export default OverviewExpanded;