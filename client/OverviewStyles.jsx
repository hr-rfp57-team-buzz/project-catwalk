import React, {useState, useEffect} from 'react';

class OverviewStyles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleChanges = this.props.handleStyleChange;
    return (
      <div className="po-styles">
        {
          this.props.variations.map((variation, index) => {
            return (<OverviewStyle key={variation.style_id} variation={variation} index={index} handleStyleChange={this.props.handleStyleChange} />);
          })
        }
      </div>
    );
  }
}

class OverviewStyle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styling = {
      'background': 'url(' + this.props.variation.photos[0].thumbnail_url + ')',
      'backgroundSize': 'cover',
      'backgroundPosition': 'center'
    };
    let checkmark = 'po-style-check';
    this.props.variation.selected ? checkmark = 'po-style-check active' : checkmark = 'po-style-check';

    return (
      <div className="po-style" style={styling} onClick={() => {this.props.handleStyleChange(this.props.index)}}>
        <div className={checkmark}><i className="fas fa-check"></i></div>
      </div>
    );
  }
}

export default OverviewStyles;