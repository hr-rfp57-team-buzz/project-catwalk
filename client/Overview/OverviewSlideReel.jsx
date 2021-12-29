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
        {
          photos.map((photo, index) => {
            return <Slide key={index} photo={photo} />;
          })
        }
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