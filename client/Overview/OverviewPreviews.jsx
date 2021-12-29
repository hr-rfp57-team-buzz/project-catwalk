import React from 'react';

class Previews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let previews = [];
    let styling;
    if (this.props.extra.photos) {
      previews = this.props.extra.photos;
    }
    return (
      <div className="po-previews">
        {
          previews.map((preview, index) => {
            return <Preview key={Math.random().toFixed(8)} preview={preview} index={index} moveSlideReel={this.props.moveSlideReel} />;
          })
        }
        <div className="po-previews-underline"></div>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styling = {
      'background': 'url(' + this.props.preview.thumbnail_url + ')',
      'backgroundSize': 'cover',
      'backgroundPosition': 'center'
    };
    return (
      <div onClick={() => { this.props.moveSlideReel(this.props.index + 1); }} className="po-preview" style={styling}></div>
    );
  }
}

export default Previews;