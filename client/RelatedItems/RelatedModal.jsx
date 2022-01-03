import React from 'react';

class RelatedModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: this.props.show
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
            <h4 className="relModal-title">Item Comparisons</h4>
          </div>
          <div className="relModal-body">
            {this.props.features.map((data) =>
              <div>{data.feature} <i class="fas fa-check relCheck"></i></div>
            )}
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
