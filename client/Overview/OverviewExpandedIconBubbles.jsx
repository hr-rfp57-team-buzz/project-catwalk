import React, { useRef } from 'react';

const OverviewExpandedIconBubbles = (props) => {
  return (
    <div className="po-icon-bubbles">
      <div className="po-icon-bubble-selected"></div>
      {
        props.product.photos.map((photo, index) => {
          return <OverviewExpandedIconBubble key={index} photo={photo} counter={props.counter} index={index + 1} moveSlideReel={props.moveSlideReel} />;
        })
      }
    </div>
  );
};

const OverviewExpandedIconBubble = (props) => {
  const bubble = useRef();

  const handleClick = () => {
    props.moveSlideReel(props.index);
  };

  return (
    <div onClick={() => { handleClick(); }} className="po-icon-bubble" ref={bubble}></div>
  );
};

export default OverviewExpandedIconBubbles;