import React from 'react';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  showWidget = (widget) => {
    widget.open();
  }

  render() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'arome9',
      uploadPreset: 'ml_default'
    }, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        if (results) {
          let photos = results.data.info.files;
        }
        // console.log(photo);
        this.setState({
          images: [...this.state.images, photos]
        })
      }
    })
    return (
      <div>
        <form className='answerModal answerAdd'>
          <h1>Submit Your Answer</h1>
          <h3> {this.props.prodName} : {this.props.qBody}</h3>
          <label>Your Answer:</label>
          <textarea maxlength='1000' rows="10" cols='100'>
          </textarea>
          <label>Nickname: </label>
          <input placeholder='Example: jack543!' type='text'/>
          <h5>For privacy reasons, do not use yout full name or email address</h5>
          <label>Your email:</label>
          <input placeholder='Example: jack@email.com' type='text' maxlength='60'/>
          <h5>For authentication reasons, you will not be emailed</h5>
          <button onClick={(e) => {e.preventDefault(); this.showWidget(widget); }}>Upload your photos</button>
        </form>
      </div>
    )
  }
};

export default AddAnswerModal;