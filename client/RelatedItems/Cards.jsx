import React, {useContext} from 'react';
import RelatedModal from './RelatedModal';
import {AppContext} from '../AppProvider';



class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: 'hidden'
    });
    //static contextType = AppContext;
    this.clickHandler = this.clickHandler.bind(this);
    this.changeId = this.props.changeId;
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
    if (this.state.visibility === 'hidden') {
      return (
        <div>
          <div className="Card">
            <RelatedModal name={this.props.data ? this.props.data.name : null} features={this.props.data ? this.props.data.features : []} mainFeat={this.props.mainFeat ? this.props.mainFeat : []}show="hidden"/>
            <span onClick={this.clickHandler}>
              <i class="far fa-star relatedStar"></i>
            </span>
            <div className="relatedPicHolder" >
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder" onClick={()=> this.changeId(this.props.data.id)}>
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data ? this.props.data.name : 'Are not there'}</h3>
              <p>${this.props.data ? this.props.data.price : 'Undefined'}</p>
              <p>{this.props.data ? this.props.data.reviews : 'Undefined'}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Card" onClick={this.clickHandler} >
            <RelatedModal name={this.props.data ? this.props.data.name : null} features={this.props.data ? this.props.data.features : []} mainFeat={this.props.mainFeat ? this.props.mainFeat : []} show="visible"/>
            <span onClick={() => console.log('hi')}>
              <i class="far fa-star relatedStar"></i>
            </span>
            <div className="relatedPicHolder" >
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder">
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data ? this.props.data.name : 'Are not there'}</h3>
              <p>${this.props.data ? this.props.data.price : 'Undefined'}</p>
              <p>{this.props.data ? this.props.data.reviews : 'Undefined'}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cards;