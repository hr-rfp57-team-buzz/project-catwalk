import React from 'react';
import axios from 'axios';

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      name: '',
      email: '',
      images: []
    }
  }

  componentDidMount() {
    var answerInput = document.getElementById("answer");
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

  handleInputs = (e) => {
    if (e.target.id === 'answer') {
      this.setState({ body: e.target.value})
    }
    if (e.target.id === 'nickname') {
      this.setState({ name: e.target.value})
    }
    if (e.target.id === 'email') {
      this.setState({ email: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/qa/questions/' + this.props.qId + '/answers', {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.images
    })
    .then((response => {
      console.log(response);
    }))
    .catch((err) => {
      console.error(err);
    })
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
          <label className='answer-modal-text your-answer' >Your Answer: </label>
          <textarea name="Answer" id="answer" required='required'
            minLength='10' maxLength='1000'
            rows="10" cols='100' onChange={(e) => { this.handleInputs(e); }}>
          </textarea>
          <div className='nickname-container'>
            <label className='qa-nickname qa-spacing'>Nickname: </label>
            <input name="Nickname" id="nickname" required='required'placeholder='Example: jack543!' type='text'onChange={(e) => { this.handleInputs(e); }}/>
            <h5>For privacy reasons, do not use yout full name or email address</h5>
          </div>
          <div className='email-container'>
            <label className='qa-spacing'>Your email:</label>
            <input className='qa-spacing' name='Email' id='email' required='email' placeholder='Example: jack@email.com' type='text' maxLength='60' onChange={(e) => { this.handleInputs(e); }}/>
            <h5>For authentication reasons, you will not be emailed</h5>
          </div>
            {this.state.images ?
              <>
              <div className='qa-modal-images'>
                {this.state.images.map(img =>
                  <a href={img}>
                  <img src={img}/>
                  </a>
                )}
              </div>
              </>
              : null
            }
          {this.state.images.length === 5 ? null :
            <button onClick={(e) => {e.preventDefault(); this.showWidget(widget); }}>Upload your photos</button>
          }
          <input onClick={(e) => { this.handleSubmit(e); }} type='submit' value="Submit Answer"/>
        </form>
      </div>
    )
  }
};

export default AddAnswerModal;