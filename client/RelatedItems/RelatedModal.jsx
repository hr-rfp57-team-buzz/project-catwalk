import React from 'react';


class RelatedModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: this.props.show,
      mainFeat: this.props.mainFeat.features,
      mainName: this.props.mainFeat.name
    };
    this.reveal = this.reveal.bind(this);
  }

  reveal() {
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

    return (
      <div className="relModal" style={{visibility: this.props.show}}>
        <div className="relModal-content">
          <div className="relModal-header">
            <span className="compMain">{this.state.mainName}</span>
            <span className="compRel">{this.props.name}</span>
            <h4 className="relModal-title">Item Comparisons</h4>
          </div>
          <div className="relModal-body">
            {this.props.features.map((data) =>
              <div className="relFeat">{data.value} <i class="fas fa-check relCheckRight"></i></div>
            )}
            {this.state.mainFeat ? this.state.mainFeat.map((data) =>
              <div className="relFeat"><i class="fas fa-check relCheckLeft"></i> {data.value}</div>
            ) : 'Nothing'}
          </div>
          <div className="relModal-footer">
            <button className="button" onClick={this.reveal}>Close</button>
          </div>
        </div>
      </div>
    );
  }

}

export default RelatedModal;
