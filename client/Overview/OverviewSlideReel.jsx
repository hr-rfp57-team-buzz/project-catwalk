import React from 'react';

const SlideReel = (props) => {
  let photos = [];
  if (props.product.photos) {
    photos = props.product.photos;
  }
  return (
    <div className="po-slide-reel">
      <Slide key="last" photo={photos.length > 0 ? photos[photos.length - 1] : {url: ''}} />
      {
        photos.map((photo, index) => {
          return <Slide key={index} photo={photo} />;
        })
      }
      <Slide key="first" photo={photos.length > 0 ? photos[0] : {url: ''}} />
    </div>
  );
};

const Slide = (props) => {
  return (
    <img className="po-slide" src={props.photo.url} />
  );
};

// const SlideReel = (props) => {
//   console.log('props', props.product.photos);
  // let photos = [];
  // if (props.product.photos) {
  //   photos = props.product.photos;
  // }
//   return (
//     <div className="po-slide-reel">
//       <div>Hello</div>
//     </div>
//   );
// };

// const Slide = (props) => {

//   return (
//     <div>Hello</div>
//     // <img src={props.photo.url} />
//   );

// };

// class SlideReel extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
    // let photos = [];
    // if (this.props.product.photos) {
    //   photos = this.props.product.photos;
    // }
//     return (
      // <div className="po-slide-reel">
      //   {/* <Slide key="last" photo={photos.length > 0 ? photos[photos.length - 1] : {url: ''}} />
      //   {
      //     photos.map((photo, index) => {
      //       return <Slide key={index} photo={photo} />;
      //     })
      //   }
      //   <Slide key="first" photo={photos.length > 0 ? photos[0] : {url: ''}} /> */}
      // </div>
//     );
//   }
// }



export default SlideReel;