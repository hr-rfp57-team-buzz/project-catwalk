import React from 'react';

class AddOutfit extends React.Component {

  constructor(props) {
    super(props);
    this.update = this.props.update;

  }

  newOutfit() {
    this.update(this.props.main);

  }



  render() {
    return (
      <div>
        <div className="Card">
          <h1>AddOutfit</h1>
          <i class="fas fa-plus outfitPlus" onClick={() => this.newOutfit()}></i>
        </div>
      </div>
    );
  }
}

export default AddOutfit;