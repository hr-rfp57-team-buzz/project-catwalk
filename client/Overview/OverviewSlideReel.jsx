import React from 'react';

class SlideReel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photos = [];
    if (this.props.extra.photos) {
      photos = this.props.extra.photos;
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
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={this.props.photo.url} />
    );
  }
}

export default SlideReel;