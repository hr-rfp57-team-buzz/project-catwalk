import React from 'react';
import RelatedModal from './RelatedModal';
import ImportStarsForRelated from '../RatingReviews/ImportStarsForRelated.jsx';


class OutfitCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      visibility: 'hidden'
    });
    this.clickHandler = this.clickHandler.bind(this);
    this.removeOutfit = this.props.removeOutfit;
  }

  clickHandler() {
    if (this.state.visibility === 'hidden') {
      this.setState({
        visibility: 'visible'
      });
    } else {
      this.setState({
        visibility: 'hidden'
      });
    }
  }

  render() {

    let rev = this.props.data.reviews;

    if (this.state.visibility === 'hidden') {
      return (
        <div>
          <div className="Card" onClick={this.clickHandler} >

            <span onClick={() => console.log('hi')}>
              <i class="fas fa-times-circle relX" onClick={()=>this.removeOutfit(this.props.data.name)}></i>
            </span>
            <div className="relatedPicHolder" onClick={this.props.show}>
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder">
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data.name}</h3>
              <p>{this.props.data.price}</p>
              {this.props.data.reviews ? <ImportStarsForRelated rating={rev} module={`related${this.props.index + 20}`}/> : <span></span> }

            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Card" onClick={this.clickHandler} >

            <span onClick={() => console.log('hi')}>
              <i class="fas fa-times-circle relX" onClick={()=>this.removeOutfit(this.props.data.name)}></i>
            </span>
            <div className="relatedPicHolder" onClick={this.props.show}>
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder">
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data ? this.props.data.name : 'Are not there'}</h3>
              <p>{this.props.data ? this.props.data.price : 'Undefined'}</p>
              {this.props.data.reviews ? <ImportStarsForRelated rating={this.props.data.reviews} module={`related${this.props.index}`}/> : <span></span> }

            </div>
          </div>
        </div>
      );
    }
  }
}

export default OutfitCards;