import React from 'react';

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

export default OverviewExpandedSlideReel;