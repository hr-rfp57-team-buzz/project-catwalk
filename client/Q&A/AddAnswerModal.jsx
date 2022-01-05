import React from 'react';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    var answerInput = document.getElementById("id");
    var nicknameInput = document.getElementById("nickname");
    var emailInput = document.getElementById("email");

    answerInput.oninvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity("You must enter the following: " + e.target.name);
    }
    answerInput.onvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity('');
    }
    nicknameInput.oninvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity("You must enter the following: " + e.target.name);
    }
    nicknameInput.oninvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity('');
    }
    emailInput.oninvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity("You must enter the following: " + e.target.name);
    }
    emailInput.oninvalid = (e) => {
      console.log(e.target);
      e.target.setCustomValidity('');
    }
  }


  getImages = (photo) => {
    this.setState({
      images: [...this.state.images, photo]
    })
  }

  showWidget = (widget) => {
    widget.open();
  }

  render() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'arome9',
      uploadPreset: 'ml_default'
    }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (result.info.thumbnail_url) {
          let pic = result.info.thumbnail_url;
          console.log('info ', result.info.thumbnail_url);
          this.getImages(pic);
        }
      }
    })
    return (
      <div className="answerModal" >
        <form>
          <h1>Submit Your Answer</h1>
          <h3> {this.props.prodName} : {this.props.qBody}</h3>
          <label>Your Answer: </label>
          <textarea name="Answer" id="id" required='required'
            minLength='10' maxLength='1000'
            rows="10" cols='100'>
          </textarea>
          <label>Nickname: </label>
          <input name="Nickname" id="nickname" required='required'placeholder='Example: jack543!' type='text'/>
          <h5>For privacy reasons, do not use yout full name or email address</h5>
          <label>Your email:</label>
          <input pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'"
            name='Email' id='email' required='email' placeholder='Example: jack@email.com' type='text' maxLength='60'/>
          <h5>For authentication reasons, you will not be emailed</h5>
          {this.state.images ?
            <>
              {this.state.images.map(img =>
                <a href={img}>
                  <img src={img}></img>
                </a>
              )}
            </>
            : null
          }
          {this.state.images.length === 5 ? null :
            <button onClick={(e) => {e.preventDefault(); this.showWidget(widget); }}>Upload your photos</button>
          }
          <input type='submit' value="Submit Answer"/>
        </form>
      </div>
    )
  }
};

export default AddAnswerModal;